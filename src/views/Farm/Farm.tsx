import React, { useMemo, useEffect } from "react";
import styled from "styled-components";

import { useParams } from "react-router-dom";
import { useWallet } from "use-wallet";
import { provider } from "web3-core";
import { Contract } from "web3-eth-contract";

import PageHeader from "../../components/PageHeader";
import Spacer from "../../components/Spacer";
// import { Farm as IFarm } from "../../contexts/Farms/types";

import useFarm from "../../hooks/useFarm";
import { getContract } from "../../utils/erc20";

import Harvest from "./components/Harvest";
import Stake from "./components/Stake";

const Farm: React.FC = () => {
  const { farmId } = useParams();
  const farm = useFarm(Number(farmId)) || {
    contract: null as Contract,
    depositToken: "",
    depositTokenAddress: "",
    earnToken: "",
    name: "",
    icon: "",
    id: Number(farmId),
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ethereum } = useWallet();

  const tokenContract = useMemo(() => {
    return getContract(ethereum as provider, farm.depositTokenAddress);
  }, [ethereum, farm.depositTokenAddress]);

  const depositTokenName = useMemo(() => {
    return farm.depositToken.toUpperCase();
  }, [farm.depositToken]);

  const earnTokenName = useMemo(() => {
    return farm.earnToken.toUpperCase();
  }, [farm.earnToken]);

  return (
    <>
      <PageHeader
        icon={farm.icon}
        subtitle={`Deposit ${depositTokenName} and earn ${earnTokenName}`}
        title={farm.name}
      />
      <StyledFarm>
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <Harvest pid={farm.id} />
          </StyledCardWrapper>
          <Spacer />
          <StyledCardWrapper>
            <Stake
              pid={farm.id}
              poolContract={farm.contract}
              tokenContract={tokenContract}
              tokenName={farm.depositToken.toUpperCase()}
            />
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer size="lg" />
        <div>
          Every time you stake and unstake LP tokens, the contract will
          automatically harvest LOCK rewards for you!
        </div>
        <Spacer size="lg" />
      </StyledFarm>
    </>
  );
};

const StyledFarm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export default Farm;
