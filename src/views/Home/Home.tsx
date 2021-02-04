import React from 'react'
import styled from 'styled-components'

import landing from '../../assets/img/landing.png'

import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'

const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        icon={<img src={landing} width="390" />}
        title="Welcome to Keykey, The Community Owned DEX"
        subtitle="Swap, Earn, and Farm LOCK, the deflationary LP Gov Token."
      />
      <Container>
        <Balances />
      </Container>
      <Spacer size="lg" />
        <div style={{
          margin: '0 auto'
        }}>
          <Button
            text="See the Pools"
            to="/pools"
            variant="secondary"
           />
        </div>
    </Page>
  )
}

const StyledOverview = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: stretch;
  }
`

const StyledSpacer = styled.div`
  height: ${props => props.theme.spacing[4]}px;
  width: ${props => props.theme.spacing[4]}px;
`

const StyledLink = styled.a`
  font-weight: 700;
  text-decoration: none;
  color: ${props => props.theme.color.primary.main};
`

export default Home