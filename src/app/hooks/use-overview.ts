import {
  PositionType,
  TokenBalanceType,
  usePositions,
} from "../../contracts/views";

export interface OverviewType {
  balance: number;
  pnl: number;
  tokens: TokenBalanceType[];
}

const useOverview = (): OverviewType => {
  const positions = usePositions();

  if (!positions) return { balance: 0, pnl: 0, tokens: [] };

  const balance = positions
    .map((position: PositionType) => position.balance)
    .reduce((a, b) => a + b, 0);

  const pnl =
    positions.reduce((a, b: PositionType) => a + b.balance * b.pnl, 0) /
    balance;

  const tokens: TokenBalanceType[] = [];

  for (let i = 0; i < positions.length; i++) {
    for (let j = 0; j < positions[i].tokens.length; j++) {
      const exists = !!tokens.find(
        (token: TokenBalanceType) =>
          token.tokenAddress === positions[i].tokens[j].tokenAddress
      );
      if (exists) {
        const index = tokens.findIndex(
          (token: TokenBalanceType) =>
            token.tokenAddress === positions[i].tokens[j].tokenAddress
        );
        tokens[index].balance += positions[i].tokens[j].balance;
      } else {
        tokens.push(positions[i].tokens[j]);
      }
    }
  }

  return {
    balance,
    pnl,
    tokens,
  };
};

export default useOverview;
