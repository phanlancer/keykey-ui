import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useWallet } from "use-wallet";
import numeral from "numeral";

import Button from "../../../components/Button";
import Card from "../../../components/Card";
import CardContent from "../../../components/CardContent";
import CardIcon from "../../../components/CardIcon";
import Loader from "../../../components/Loader";
import Spacer from "../../../components/Spacer";

import useFarms from "../../../hooks/useFarms";
import useYam from "../../../hooks/useYam";

import { Farm } from "../../../contexts/Farms";

import { bnToDec } from "../../../utils";
import { getEarned } from "../../../yamUtils";

const FarmCards: React.FC = () => {
  const [farms] = useFarms();
  const rows = farms.reduce<Farm[][]>(
    (farmRows, farm) => {
      const newFarmRows = [...farmRows];
      if (newFarmRows[newFarmRows.length - 1].length === 3) {
        newFarmRows.push([farm]);
      } else {
        newFarmRows[newFarmRows.length - 1].push(farm);
      }
      return newFarmRows;
    },
    [[]]
  );

  return (
    <StyledCards>
      {!!rows[0].length ? (
        rows.map((farmRow, i) => (
          <StyledRow key={i}>
            {farmRow.map((farm, j) => (
              <React.Fragment key={j}>
                <FarmCard farm={farm} />
                {(j === 0 || j === 1) && <StyledSpacer />}
              </React.Fragment>
            ))}
          </StyledRow>
        ))
      ) : (
        <StyledLoadingWrapper>
          <Loader text="Loading pools" />
        </StyledLoadingWrapper>
      )}
    </StyledCards>
  );
};

interface FarmCardProps {
  farm: Farm;
}

const FarmCard: React.FC<FarmCardProps> = ({ farm }) => {
  const [harvestable, setHarvestable] = useState(0);

  const { id } = farm;
  const { account } = useWallet();
  const yam = useYam();

  useEffect(() => {
    async function fetchEarned() {
      const earned = await getEarned(yam, id, account);
      setHarvestable(bnToDec(earned));
    }
    if (yam && account) {
      fetchEarned();
    }
  }, [yam, id, account, setHarvestable]);

  return (
    <StyledCardWrapper>
      {farm.id === 26 && <StyledCardAccent />}
      <Card>
        <CardContent>
          <StyledContent>
            {/* <CardIcon>{farm.icon}</CardIcon> */}
            <StyledTitle>{farm.name}</StyledTitle>
            <StyledDetails>
              <StyledDetail>
                Deposit {farm.depositToken.toUpperCase()}
              </StyledDetail>
              <StyledDetail>Earn {farm.earnToken.toUpperCase()}</StyledDetail>
            </StyledDetails>
            <Spacer />
            <StyledHarvestable>
              {harvestable
                ? `${numeral(harvestable).format(
                    "0.00a"
                  )} LOCKs ready to harvest.`
                : undefined}
            </StyledHarvestable>
            <Button text="Select" to={`/pools/${farm.id}`} />
          </StyledContent>
        </CardContent>
      </Card>
    </StyledCardWrapper>
  );
};

const StyledCardAccent = styled.div`
  // background: linear-gradient(
  //   45deg,
  //   rgba(255, 0, 0, 1) 0%,
  //   rgba(255, 154, 0, 1) 10%,
  //   rgba(208, 222, 33, 1) 20%,
  //   rgba(79, 220, 74, 1) 30%,
  //   rgba(63, 218, 216, 1) 40%,
  //   rgba(47, 201, 226, 1) 50%,
  //   rgba(28, 127, 238, 1) 60%,
  //   rgba(95, 21, 242, 1) 70%,
  //   rgba(186, 12, 248, 1) 80%,
  //   rgba(251, 7, 217, 1) 90%,
  //   rgba(255, 0, 0, 1) 100%
  // );
  // border-radius: 12px;
  box-shadow: 0px 0px 25px ${(props) => props.theme.color.grey[800]};
  filter: blur(4px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
`;

const StyledCards = styled.div`
  width: 900px;
  margin-top: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledLoadingWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`;

const StyledRow = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.spacing[4]}px;
  flex-flow: row wrap;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

const StyledCardWrapper = styled.div`
  display: flex;
  width: calc((900px - ${(props) => props.theme.spacing[4]}px * 2) / 3);
  position: relative;
  text-align: center;
`;

const StyledTitle = styled.h4`
  color: ${(props) => props.theme.color.grey[600]};
  font-size: 24px;
  font-weight: 700;
  margin: ${(props) => props.theme.spacing[2]}px 0 0;
  padding: 0;
`;

const StyledContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const StyledSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`;

const StyledDetails = styled.div`
  margin-top: ${(props) => props.theme.spacing[2]}px;
  text-align: center;
`;

const StyledDetail = styled.div`
  color: ${(props) => props.theme.color.grey[500]};
`;

const StyledHarvestable = styled.div`
  color: ${(props) => props.theme.color.secondary.main};
  font-size: 16px;
  height: 48px;
  text-align: center;
`;

export default FarmCards;
