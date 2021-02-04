import { useCallback, useEffect, useState } from "react";

import BigNumber from "bignumber.js";
import { useWallet } from "use-wallet";

import { getEarned } from "../yamUtils";
import useYam from "./useYam";

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0));
  const { account }: { account: string } = useWallet();
  const yam = useYam();

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(yam, pid, account);
    setBalance(new BigNumber(balance));
  }, [account, pid, yam]);

  useEffect(() => {
    if (account && pid && yam) {
      fetchBalance();
    }
  }, [account, fetchBalance, pid, setBalance, yam]);

  return balance;
};

export default useEarnings;
