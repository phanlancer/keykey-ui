import React from 'react'
import styled from 'styled-components'

import Card from '../../components/Card'
import CardContent from '../../components/CardContent'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'

const FAQ: React.FC = () => {
  return (
    <Page>
      <PageHeader icon="❓" title="About " />
      <Container>
        <Card>
          <CardContent>
            <p>Please see below for the most up to date information regarding the future of the Keykey protocol. As has always been our intention, the community will be in control of future decision making. The migration from KeykeyV1 to KeykeyV2 is the first step in this process; from there, KeykeyV2 tokenholders will signal their desired path forward on community proposals.</p>
            <StyledHeading>1. How will the migration process work?</StyledHeading>
            <StyledList>
              <StyledListItem>A new KeykeyV2 ERC-20 token will be created. This will be a standard ERC-20 token with no rebases to serve as placeholder while KeykeyV3 is audited.</StyledListItem>
              <StyledListItem>A migration contract will be audited and deployed as soon as possible. We are in discussions with multiple auditors.</StyledListItem>
              <StyledListItem>All KeykeyV1 holders can burn KeykeyV1 to mint KeykeyV2 via a migration contract.</StyledListItem>
              <StyledListItem>The number of KeykeyV2 tokens received will be based upon KeykeyV1 balanceOfUnderlying, which remains constant regardless of rebases.</StyledListItem>
              <StyledListItem>The migration contract will have a deadline that will be a minimum of 48 hours after deployment and a maximum of 72 hours after deployment. Following the deadline, migration will be impossible and KeykeyV1 tokens will no longer be able to migrate to KeykeyV2.</StyledListItem>
            </StyledList>
            <StyledHeading>2. How will the KeykeyV3 protocol relaunch work?</StyledHeading>
            <StyledList>
              <StyledListItem>KeykeyV3 will be a fully audited version of the Keykey protocol.</StyledListItem>
              <StyledListItem>There will be a mechanism that allows for KeykeyV2 to be converted to KeykeyV3. The details of this mechanism will be subject to a vote.</StyledListItem>
            </StyledList>
            <StyledHeading>How will delegators be rewarded?</StyledHeading>
            <StyledList>
              <StyledListItem>Members of the community will submit proposals to reward those who delegated votes to help save Keykey.These proposals will be subject to tokenholder approval.</StyledListItem>
              <StyledListItem>You can view snapshotted votes at the time of governance proposal <a href="https://raw.githubusercontent.com/Keykey-finance/Keykey-protocol/master/Keykey_delegator_snapshot_10650187_draft.json">here.</a></StyledListItem>
            </StyledList>
            <StyledHeading>4. Can I continue to farm KeykeyV1?</StyledHeading>
            <StyledList>
              <StyledListItem>The staking contracts continue to function.</StyledListItem>
              <StyledListItem>Providing liquidity to the Keykey/yCRV Uniswap pool is extremely risky due to the bug in the Keykey rebase functionality. A positive rebase will buy yCRV and send it to the frozen reserves contract.</StyledListItem>
            </StyledList>
            <StyledHeading>5. What are the official Keykey token addresses?</StyledHeading>
            <StyledList>
              <StyledListItem>
                <a href="https://etherscan.io/token/0x0e2298e3b3390e3b945a5456fbf59ecc3f55da16">
                  KeykeyV1: 0x0e2298e3b3390e3b945a5456fbf59ecc3f55da16
                </a>
              </StyledListItem>
              <StyledListItem>
                <a href="https://etherscan.io/token/0xaba8cac6866b83ae4eec97dd07ed254282f6ad8a">
                  KeykeyV2: 0xaba8cac6866b83ae4eec97dd07ed254282f6ad8a
                </a>
              </StyledListItem>
              <StyledListItem>KeykeyV3: TBD</StyledListItem>
            </StyledList>
            <StyledHeading>Additional Resources</StyledHeading>
            <StyledList>
              <StyledListItem><a href="https://medium.com/">Intro post</a></StyledListItem>
              <StyledListItem><a href="https://medium.com/">Migration plan</a></StyledListItem>
              <StyledListItem><a href="https://medium.com/">Initial post-mortem and bug explanation</a></StyledListItem>
            </StyledList>
            <StyledHeading>Community-built resource for protocol information</StyledHeading>
            <a href="https://medium.com/">https://Keykey.chainwiki.dev/en/home</a>
          </CardContent>
        </Card>
      </Container>
    </Page>
  )
}

const StyledHeading = styled.h2`
  margin-bottom: 0;
  margin-top: ${props => props.theme.spacing[5]}px;;
`
const StyledList = styled.ul`
  margin: 0;
  padding: 0 ${props => props.theme.spacing[6]}px;;
`
const StyledListItem = styled.li`
  margin-top: ${props => props.theme.spacing[3]}px;
`

const StyledText = styled.p`
  font-style: italic;
  line-height: 2;
  text-indent: ${props => props.theme.spacing[4]}px;
`

export default FAQ