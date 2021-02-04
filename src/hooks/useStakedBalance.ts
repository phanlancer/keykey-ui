import { useCallback, useEffect, useState } from "react";

import BigNumber from "bignumber.js";
import { useWallet } from "use-wallet";

import { getStaked } from "../yamUtils";
import useYam from "./useYam";

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0));
  const { account }: { account: string } = useWallet();
  const yam = useYam();

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(yam, pid, account);
    setBalance(new BigNumber(balance));
  }, [account, pid, yam]);

  useEffect(() => {
    if (account && pid && yam) {
      fetchBalance();
    }
  }, [account, fetchBalance, pid, setBalance, yam]);

  return balance;
};

export default useStakedBalance;
