import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Container from "../Container";
import Logo from "../Logo";

import AccountButton from "./components/AccountButton";
import Nav from "./components/Nav";

interface TopBarProps {
  onPresentMobileMenu: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onPresentMobileMenu }) => {
  return (
    <StyledTopBar>
      <Container size="lg">
        <StyledTopBarInner>
          <StyledLogoWrapper>
            {/* <Logo /> */}
          </StyledLogoWrapper>
          <StyledMenuBar>
            {/* <StyledMenu to="/home">Home</StyledMenu> */}
            <StyledMenu to="/pools">Pools</StyledMenu>
            {/* <StyledMenuToOut href="https://medium.com/keykey-finance">About</StyledMenuToOut> */}
          </StyledMenuBar>
          <StyledAccountButtonWrapper>
            <AccountButton />
          </StyledAccountButtonWrapper>
        </StyledTopBarInner>
      </Container>
    </StyledTopBar>
  );
};

const StyledMenuBar = styled.div`
  width: 180px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledMenuToOut = styled.a`
  display: block;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => props.theme.color.grey[600]};
`;

const StyledMenu = styled(Link)`
  display: block;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => props.theme.color.grey[600]};
`;

const StyledLogoWrapper = styled.div`
  width: 200px;
  @media (max-width: 400px) {
    width: auto;
  }
`;

const StyledTopBar = styled.div``;

const StyledTopBarInner = styled.div`
  align-items: center;
  display: flex;
  height: ${(props) => props.theme.topBarSize}px;
  justify-content: space-between;
  max-width: ${(props) => props.theme.siteWidth}px;
  width: 100%;
`;
const StyledNavWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  @media (max-width: 400px) {
    display: none;
  }
`;

const StyledAccountButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 156px;
  @media (max-width: 400px) {
    justify-content: center;
    width: auto;
  }
`;

const StyledMenuButton = styled.button`
  background: none;
  border: 0;
  margin: 0;
  outline: 0;
  padding: 0;
  display: none;
  @media (max-width: 400px) {
    align-items: center;
    display: flex;
    height: 44px;
    justify-content: center;
    width: 44px;
  }
`;

export default TopBar;
