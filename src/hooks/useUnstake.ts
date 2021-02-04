import { useCallback } from "react";

import { useWallet } from "use-wallet";

import { unstake } from "../yamUtils";
import useYam from "./useYam";

const useUnstake = (pid: number) => {
  const yam = useYam();
  const { account } = useWallet();

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(yam, pid, amount, account);
      console.log(txHash);
    },
    [account, pid, yam]
  );

  return { onUnstake: handleUnstake };
};

export default useUnstake;
