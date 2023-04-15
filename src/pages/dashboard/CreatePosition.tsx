import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Popup from "../../components/Popup";
import Input from "../../styles/Input";
import Radio from "../../components/Radio";

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

const CreatePosition = ({ show, address }: Props) => {
  const { t } = useTranslation();
  const [address_, setAddress] = useState<string | undefined>(undefined);
  const [amount, setAmount] = useState<string | undefined>(undefined);

  const navigate = useNavigate();

  useEffect(() => {
    if (address) {
      setAddress(address);
    }
  }, [address]);

  const header: string = t("create.header");
  const buttonText: string = t("create.button");
  const createAddress: string = t("create.address");
  const createAmount: string = t("create.amount");

  return (
    <Popup
      header={header}
      show={show}
      close={() => navigate("/dashboard")}
      buttonText={buttonText}
      buttonAction={() => console.log("meow")}
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
          <Row>
            <Radio checked toggle={() => console.log("meow")} />
            <Item>USDC</Item>
            <Item>50%</Item>
            <Item>1000</Item>
          </Row>

          <Row>
            <Radio checked toggle={() => console.log("meow")} />
            <Item>USDC</Item>
            <Item>50%</Item>
            <Item>1000</Item>
          </Row>
          <Row>
            <Radio checked toggle={() => console.log("meow")} />
            <Item>USDC</Item>
            <Item>50%</Item>
            <Item>1000</Item>
          </Row>
        </ShoppingList>
      </StyledCreatePosition>
    </Popup>
  );
};

export default CreatePosition;
