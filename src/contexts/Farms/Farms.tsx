import React, { useCallback, useEffect, useState } from "react";

import { useWallet } from "use-wallet";
import { Contract } from "web3-eth-contract";

import { lockToken as lockTokenAddress } from "../../constants/tokenAddresses";
import useYam from "../../hooks/useYam";

import { bnToDec } from "../../utils";
import { getKeyMasterContract, getEarned } from "../../yamUtils";

import Context from "./context";
import { Farm } from "./types";

const NAME_FOR_POOL: { [key: string]: string } = {
  usdt_eth_pool: "USDT-ETH",
  usdc_eth_pool: "USDC-ETH",
  dai_eth_pool: "DAI-ETH",
  susd_eth_pool: "sUSD-ETH",
  comp_eth_pool: "COMP-ETH",
  lend_eth_pool: "LEND-ETH",
  bzrx_eth_pool: "BZRX-ETH",
  fsw_eth_pool: "FSW-ETH",
  yfv_usdt_pool: "YFV-USDT",
  cream_eth_pool: "CREAM-ETH",
  snx_eth_pool: "SNX-ETH",
  uma_eth_pool: "UMA-ETH",
  link_eth_pool: "LINK-ETH",
  band_eth_pool: "BAND-ETH",
  dia_eth_pool: "DIA-ETH",
  ampl_eth_pool: "AMPL-ETH",
  yfi_eth_pool: "YFI-ETH",
  yfii_eth_pool: "YFII-ETH",
  yamv2_eth_pool: "YAMv2-ETH",
  eth_rmpl_pool: "Eth-RMPL",
  om_eth_pool: "OM-ETH",
  mta_eth_pool: "MTA-ETH",
  susd_sbased_pool: "sUSD-$BASED",
  wnxm_eth_pool: "wNXM-ETH",
  lrc_eth_pool: "LRC-ETH",
  ant_eth_pool: "ANT-ETH",
  lock_eth_pool: "LOCK-ETH",
};

const ICON_FOR_POOL: { [key: string]: string } = {
  usdt_eth_pool: "🐋",
  usdc_eth_pool: "🐋",
  dai_eth_pool: "🐋",
  susd_eth_pool: "🐋",
  comp_eth_pool: "🐋",
  lend_eth_pool: "🐋",
  bzrx_eth_pool: "🐋",
  fsw_eth_pool: "🐋",
  yfv_usdt_pool: "🐋",
  cream_eth_pool: "🐋",
  snx_eth_pool: "🐋",
  uma_eth_pool: "🐋",
  link_eth_pool: "🐋",
  band_eth_pool: "🐋",
  dia_eth_pool: "🐋",
  ampl_eth_pool: "🐋",
  yfi_eth_pool: "🐋",
  yfii_eth_pool: "🐋",
  yamv2_eth_pool: "🐋",
  eth_rmpl_pool: "🐋",
  om_eth_pool: "🐋",
  mta_eth_pool: "🐋",
  susd_sbased_pool: "🐋",
  wnxm_eth_pool: "🐋",
  lrc_eth_pool: "🐋",
  ant_eth_pool: "🐋",
  lock_eth_pool: "🐋",
};

const ID_FOR_POOL: { [key: string]: number } = {
  usdt_eth_pool: 0,
  usdc_eth_pool: 1,
  dai_eth_pool: 2,
  susd_eth_pool: 3,
  comp_eth_pool: 4,
  lend_eth_pool: 5,
  bzrx_eth_pool: 6,
  fsw_eth_pool: 7,
  yfv_usdt_pool: 8,
  cream_eth_pool: 9,
  snx_eth_pool: 10,
  uma_eth_pool: 11,
  link_eth_pool: 12,
  band_eth_pool: 13,
  dia_eth_pool: 14,
  ampl_eth_pool: 15,
  yfi_eth_pool: 16,
  yfii_eth_pool: 17,
  yamv2_eth_pool: 18,
  eth_rmpl_pool: 19,
  om_eth_pool: 20,
  mta_eth_pool: 21,
  susd_sbased_pool: 22,
  wnxm_eth_pool: 23,
  lrc_eth_pool: 24,
  ant_eth_pool: 25,
  lock_eth_pool: 26,
};

const ADDRESS_FOR_POOL: { [key: string]: string } = {
  usdt_eth_pool: "0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852",
  usdc_eth_pool: "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc",
  dai_eth_pool: "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11",
  susd_eth_pool: "0xf80758ab42c3b07da84053fd88804bcb6baa4b5c",
  comp_eth_pool: "0xcffdded873554f362ac02f8fb1f02e5ada10516f",
  lend_eth_pool: "0xab3f9bf1d81ddb224a2014e98b238638824bcf20",
  bzrx_eth_pool: "0xb9b752f7f4a4680eeb327ffe728f46666763a796",
  fsw_eth_pool: "0xe275eb6154cb4a73f0ba573e43b2b06e9e78b7f0",
  yfv_usdt_pool: "0xd58b1b5d2148f744e9eb3a87f20bebf3ca5f8974",
  cream_eth_pool: "0xddf9b7a31b32ebaf5c064c80900046c9e5b7c65f",
  snx_eth_pool: "0x43ae24960e5534731fc831386c07755a2dc33d47",
  uma_eth_pool: "0x88d97d199b9ed37c29d846d00d443de980832a22",
  link_eth_pool: "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974",
  band_eth_pool: "0xf421c3f2e695c2d4c0765379ccace8ade4a480d9",
  dia_eth_pool: "0x4dc02e1bb2ec1ce4c50c351e6e06505e7b1dce8d",
  ampl_eth_pool: "0xc5be99a02c6857f9eac67bbce58df5572498f40c",
  yfi_eth_pool: "0x2fdbadf3c4d5a8666bc06645b8358ab803996e28",
  yfii_eth_pool: "0x8973be4402bf0a39448f419c2d64bd3591dd2299",
  yamv2_eth_pool: "0xa5904961f61bae7c4dd8478077556c91bf291cfd",
  eth_rmpl_pool: "0x6a3d23fa07c455f88d70c29d230467c407a3964b",
  om_eth_pool: "0x99b1db3318aa3040f336fb65c55400e164ddcd7f",
  mta_eth_pool: "0x0d0d65e7a7db277d3e0f5e1676325e75f3340455",
  susd_sbased_pool: "0xaad22f5543fcdaa694b68f94be177b561836ae57",
  wnxm_eth_pool: "0x23bff8ca20aac06efdf23cee3b8ae296a30dfd27",
  lrc_eth_pool: "0x8878df9e1a7c87dcbf6d3999d997f262c05d8c70",
  ant_eth_pool: "0xfa19de406e8f5b9100e4dd5cad8a503a6d686efe",
  lock_eth_pool: "0x65Ccf4160930C1fE8ff878041c9913ba404B5d06",
};

const Farms: React.FC = ({ children }) => {
  const [farms, setFarms] = useState<Farm[]>([]);
  const [unharvested, setUnharvested] = useState(0);

  const yam = useYam();
  const { account } = useWallet();

  const fetchPools = useCallback(async () => {
    const univ2LP = await getKeyMasterContract(yam);

    const farmsArr: Farm[] = [];
    const poolKeys = Object.keys(NAME_FOR_POOL);
    for (let i = 0; i < poolKeys.length; i++) {
      const poolKey = poolKeys[i];
      try {
        farmsArr.push({
          contract: univ2LP,
          name: NAME_FOR_POOL[poolKey],
          depositToken: poolKey,
          depositTokenAddress: ADDRESS_FOR_POOL[poolKey],
          earnToken: "LOCK",
          earnTokenAddress: lockTokenAddress,
          icon: ICON_FOR_POOL[poolKey],
          id: ID_FOR_POOL[poolKey],
          sort: ID_FOR_POOL[poolKey],
        });
      } catch (e) {
        console.log(e);
      }
    }
    farmsArr.sort((a, b) => (a.sort < b.sort ? 1 : -1));
    setFarms(farmsArr);
  }, [yam]);

  useEffect(() => {
    if (yam) {
      fetchPools();
    }
  }, [yam, fetchPools]);

  useEffect(() => {
    async function fetchUnharvested() {
      const unharvestedBalances = await Promise.all(
        farms.map(async (farm: Farm) => {
          const earnings = await getEarned(yam, farm.id, account);
          return bnToDec(earnings);
        })
      );
      const totalBal = unharvestedBalances.reduce((acc, val) => acc + val);
      setUnharvested(totalBal);
    }
    if (account && farms.length && yam) {
      fetchUnharvested();
    }
  }, [account, farms, setUnharvested, yam]);

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Farms;
