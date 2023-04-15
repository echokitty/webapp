import { utils } from "ethers";

export const LIVE = true;

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export const NATIVE_TOKEN_ADDRESS =
  "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
export const API_NATIVE = "0x0000000000000000000000000000000000001010";

export const SALT = utils.keccak256(utils.randomBytes(32));

interface GlobalsType {
  FACTORY: string;
}

export const ETH_GLOBALS: GlobalsType = {
  FACTORY: "0x88865532AB232aab74C69FEb0409A00133d053d8",
};

export const POLYGON_GLOBALS: GlobalsType = {
  FACTORY: "0x88865532AB232aab74C69FEb0409A00133d053d8",
};
