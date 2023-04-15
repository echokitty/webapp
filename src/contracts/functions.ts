import wethAbi from "./weth.json";
import useGlobals from "../app/hooks/use-globals";
import useContract from "../app/hooks/use-contract";

// export const useWrap = (wallet: string) => {
//   const globals = useGlobals();

//   const { state: wrapState, send: wrap } = useContract(
//     globals.FACTORY,
//     wethAbi,
//     "deposit"
//     "Wrap"
//   );
//   return { wrapState, wrap };
// };
