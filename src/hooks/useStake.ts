import { useCallback } from "react";

import { useWallet } from "use-wallet";

import { stake } from "../yamUtils";
import useYam from "./useYam";

const useStake = (pid: number, tokenName: string) => {
  const yam = useYam();
  const { account } = useWallet();

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(yam, pid, amount, account, tokenName);
      console.log(txHash);
    },
    [account, pid, tokenName, yam]
  );

  return { onStake: handleStake };
};

export default useStake;
