import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BigNumber } from "ethers";

import Popup from "../../components/Popup";
import Input from "../../styles/Input";
import Radio from "../../components/Radio";
import useTokens, { Token } from "../../app/hooks/use-tokens";
import { API_NATIVE, ZERO_ADDRESS } from "../../app/globals";
import usePrices from "../../app/hooks/use-prices";
import { roundToDp } from "../../app/lib/formatting";
import {
  Swap,
  useCreatePosition,
  useCreateWallet,
} from "../../contracts/functions";
import { useWallet } from "../../contracts/views";

const StyledCreatePosition = styled.div`
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 2rem;
  }
`;

const ShoppingList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 4rem;
`;

const NullSpace = styled.div`
  width: 4rem;
`;

const Header = styled.div`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid var(--main);
`;

const RowHeader = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  flex: 1;
`;

const Item = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  flex: 1;
`;

interface Props {
  show: boolean;
  address: string | undefined;
}

const stringToScaledBigNumber = (value: string) => {
  return BigNumber.from(Math.floor(Number(value) * 10_000)).mul(
    BigNumber.from(10).pow(14)
  );
};

const CreatePosition = ({ show, address }: Props) => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<number[]>([]);
  const [address_, setAddress] = useState<string | undefined>(undefined);
  const [amount, setAmount] = useState<string | undefined>(undefined);
  const tokens = useTokens("matic-mainnet", address_ || ZERO_ADDRESS);
  const prices = usePrices(tokens.map((token: Token) => token.address));
  const wallet = useWallet();
  const { createPositionState, createPosition } = useCreatePosition(
    address_ || ZERO_ADDRESS,
    stringToScaledBigNumber(amount || "0")
  );
  const { createWallet } = useCreateWallet();

  const createPositionOrWallet = async (swaps: Swap[]) => {
    if (wallet) {
      createPosition(swaps);
    } else {
      createWallet();
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (address) {
      setAddress(address);
    }
  }, [address]);

  const header: string = t("create.header");
  const buttonText: string = wallet
    ? t("create.button")
    : t("initialize.button");
  const createAddress: string = t("create.address");
  const createAmount: string = t("create.amount");

  let total = 0;
  tokens.forEach((token: Token) => {
    if (prices && prices[token.address]) {
      total += token.balance * prices[token.address];
    }
  });

  const getPercentage = (
    token: Token,
    prices: Record<string, number> | null
  ) => {
    if (!prices) return 0;
    if (!prices[token.address]) return 0;
    return (token.balance * prices[token.address]) / total;
  };

  const swaps: Swap[] = tokens
    .filter((token: Token, index: number) => {
      return selected.includes(index) && token.address !== API_NATIVE;
    })
    .map((token: Token) => {
      const percentage = getPercentage(token, prices);
      return {
        toToken: token.address,
        fromAmount: BigNumber.from(
          Math.floor(Number(amount) * percentage * 10_000)
        )
          .mul(BigNumber.from(10).pow(14))
          .toString(),
      };
    });

  return (
    <Popup
      header={header}
      show={show}
      close={() => navigate("/dashboard")}
      buttonText={buttonText}
      buttonAction={() => createPositionOrWallet(swaps)}
      width="60rem"
    >
      <StyledCreatePosition>
        <Input
          placeholder={createAddress}
          value={address_}
          onChange={(e: any) => setAddress(e.target.value)}
        />
        <Input
          type="number"
          placeholder={createAmount}
          value={amount}
          onChange={(e: any) => setAmount(e.target.value)}
        />
        <ShoppingList>
          <Header>{t("create.shopping")}</Header>
          <Row>
            <NullSpace />
            <RowHeader>Token</RowHeader>
            <RowHeader>Percent</RowHeader>
            <RowHeader>Amount</RowHeader>
          </Row>
          {tokens.map((token: Token, index: number) => {
            return (
              <Row>
                <Radio
                  checked={selected.includes(index)}
                  toggle={() => {
                    if (selected.includes(index)) {
                      setSelected(selected.filter((i) => i !== index));
                    } else {
                      setSelected([...selected, index]);
                    }
                  }}
                />
                <Item>{token.symbol}</Item>
                <Item>{`${roundToDp(
                  getPercentage(token, prices) * 100,
                  2
                )}%`}</Item>
                <Item>{`${token.balance} ${token.symbol}`}</Item>
              </Row>
            );
          })}
        </ShoppingList>
      </StyledCreatePosition>
    </Popup>
  );
};

export default CreatePosition;
