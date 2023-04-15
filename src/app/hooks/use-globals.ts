import { useEthers } from "@usedapp/core";
import { useDispatch } from "react-redux";
import { clearError, ErrorButtonType, setError } from "../../state/errorSlice";
import { ETH_GLOBALS, POLYGON_GLOBALS } from "../globals";

const useGlobals = () => {
  const dispatch = useDispatch();
  const { chainId } = useEthers();

  if (chainId === 1) {
    dispatch(clearError());
    return ETH_GLOBALS;
  }
  if (chainId === 137) {
    dispatch(clearError());
    return POLYGON_GLOBALS;
  }
  if (!chainId) {
    dispatch(clearError());
    return ETH_GLOBALS;
  }

  dispatch(
    setError({
      header: "Unsupported Network",
      subHeader: "Only Polygon and Mainnet are supported",
      button: ErrorButtonType.SWITCH_TO_MAINNET,
    })
  );
  return ETH_GLOBALS;
};

export default useGlobals;
