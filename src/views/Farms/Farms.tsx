import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { useWallet } from "use-wallet";

import landing from "../../assets/img/landing.png";

import Button from "../../components/Button";
import Page from "../../components/Page";
import PageHeader from "../../components/PageHeader";
import Container from "../../components/Container";
import WalletProviderModal from "../../components/WalletProviderModal";

import useModal from "../../hooks/useModal";

import Farm from "../Farm";

import FarmCards from "./components/FarmCards";

const Farms: React.FC = () => {
  const { path } = useRouteMatch();
  const { account } = useWallet();
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />);
  return (
    <Switch>
      <Page>
        {!!account ? (
          <>
            <Route exact path={path}>
              <PageHeader
                icon={<img src={landing} width="390" />}
                subtitle="Earn LOCK tokens by providing liquidity."
                title="Select a pool."
              />              
              <FarmCards />              
            </Route>
            <Route path={`${path}/:farmId`}>
              <Farm />
            </Route>
          </>
        ) : (
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Button
              onClick={onPresentWalletProviderModal}
              text="Connect Wallet"
            />
          </div>
        )}
      </Page>
    </Switch>
  );
};

export default Farms;
