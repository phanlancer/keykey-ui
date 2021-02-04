import React from "react";
import styled from "styled-components";

import landing from "../../assets/img/landing3.png";
import chartImg from "../../assets/img/chart.jpg";

import Container from "../../components/Container";
import Page from "../../components/Page";
import PageHeader from "../../components/PageHeader";
import CountDown from "../../components/CountDown";
import { lockToken, keyMaster } from "../../constants/tokenAddresses";

const Dashboard: React.FC = () => {
  return (
    <Page>      
      <Container size="md">
        <StyledPageHeader>
          <StyledIcon>
            <img src={landing} width="580" />
          </StyledIcon>
          <StyledTitle>Farm LOCK, a wildflower Token.</StyledTitle>
          {/* <StyledTitle>Welcome to KeyKey</StyledTitle> */}
          {/* <StyledSubtitle>
            Swap, Earn, and Farm LOCK, the premium LP Gov Token. <br />
            The latest and greatest UNISWAP hardfork.
          </StyledSubtitle> */}
          {/* <StyledSubtitle>
            A Community-run DEX, for low fee, high volume tokens. <br />
            swap, earn, and farm LOCK. 
          </StyledSubtitle> 
          <StyledDesc>Powered by the UniSwapV2 Engine</StyledDesc>
          */}
          <StyledDesc>
            We hold 2.7M LOCK. <br />
            8% of ongoing LOCK crops are fed to the Team.
          </StyledDesc>
          <StyledDesc>
            LOCK has zero monetary value, and zero on-chain utility. <br /> 
            Future utitlity or value is not guaranteed.
          </StyledDesc>
        </StyledPageHeader>
      </Container>
      <Container>
        <StyledOverview>
          {/* <StyledText fontStyle="italic" marginBottom={25} colorColor="#1aae90">
            LOCK is non-dilutive. <br /> 
            Early LP's will hold ~18% of total supply. <br />
            Holders have Protocol Governance.
          </StyledText> */}
          {/* <CountDown />
          <StyledImage src={chartImg} /> */}
          {/* <StyledText>
            Pre-mine is live until block 10848000.
          </StyledText> */}
          {/* <StyledLink href="https://medium.com/keykey-finance/introducing-keykey-the-community-owned-dex-e11387cf64af">
            Read More
          </StyledLink> */}
          {/* <StyledLink href="https://blog.keykey.fi/early-stage-growth-fund/">
            Early-Stage Growth Fund
          </StyledLink> */}
          {/* <StyledLink href="https://uniswap.info/pair/0x65Ccf4160930C1fE8ff878041c9913ba404B5d06"  marginBottom={30}>
            Trade LOCK
          </StyledLink> */}
          <StyledLink href={`https://etherscan.io/address/${lockToken}`}>
            LockToken Address
          </StyledLink>
          <StyledLink href={`https://etherscan.io/address/${keyMaster}`}  marginBottom={50}>
            KeyMaster Address
          </StyledLink>
          <StyledText fontSize={16} colorColor="#d54841;">
            This Protocol is Experimental. Use Carefully and do not risk more
            than you can lose.
          </StyledText>
        </StyledOverview>
      </Container>
    </Page>
  );
};

const StyledPageHeader = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  text-align: center;
  // padding-bottom: ${props => props.theme.spacing[6]}px;
  // padding-top: ${props => props.theme.spacing[6]}px;
  margin: 0 auto;
`
const StyledIcon = styled.div`
  font-size: 96px;
  height: auto;
  line-height: 24px;
  text-align: center;
  max-width: 600px;
  img {
    @media (max-width: 768px) {
      max-width: 250px;
    }
  }
`
const StyledTitle = styled.h1`
  // color: #2884c6;
  color: #f9a02b;
  font-size: 22px;
  font-weight: 700;
  font-family: "Swiss 721 Bold Rounded";
  margin: 0;
  padding: 0;
  margin-top: 10px;
  // margin-bottom: 20px;
`
const StyledSubtitle = styled.h3`
  color: #f9a02b;
  font-size: 25px;
  font-weight: 400;
  font-family: "Swiss 721 Bold Rounded";
  margin: 0;
  padding: 0;
  text-align: center;  
`
const StyledDesc = styled.h3`
  // color: ${props => props.theme.color.grey[400]};
  color: #f9a02b;
  font-size: 20px;
  font-weight: 400;
  // font-style: italic;
  font-family: "Swiss 721 Bold Rounded";
  margin: 0;
  margin-top: 30px;
  padding: 0;
  text-align: center;
`
const StyledOverview = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  max-width: 650px;
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: stretch;
  }
`;

const StyledText = styled.div<{
  fontSize?: number,
  marginBottom?: number,
  fontStyle?: string,
  colorColor?: string
}>`
  font-family: "Swiss 721 Bold Rounded";
  font-size:  ${({ fontSize }) => fontSize? fontSize: '20'}px;
  font-style: ${({ fontStyle }) => fontStyle? fontStyle: 'normal'};
  font-weight: 700;
  color: ${({ colorColor }) => colorColor? colorColor: '#000000'};
  margin-bottom: ${({ marginBottom }) => marginBottom? marginBottom : '0'}px;  
`

const StyledLink = styled.a<{  
  marginBottom?: number
}>`
  font-weight: 700;
  font-size: 18px;
  font-style: italic;
  margin-bottom: ${({ marginBottom }) => marginBottom? marginBottom : '5'}px;
  color: ${props => props.theme.color.grey[400]};
`
const StyledImage = styled.img`
  height: auto;
  line-height: 96px;
  text-align: center;
  max-width: 400px;
  margin: 45px auto;
  @media (max-width: 768px) {
    max-width: 300px;
  }
`

export default Dashboard;
