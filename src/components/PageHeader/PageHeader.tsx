import React from 'react'
import styled from 'styled-components'

import Container from '../Container'

interface PageHeaderProps {
  icon: React.ReactNode,
  subtitle?: string,
  title?: string,
}

const PageHeader: React.FC<PageHeaderProps> = ({ icon, subtitle, title }) => {
  return (
    <Container size="md">
    <StyledPageHeader>
      <StyledIcon>{icon}</StyledIcon>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <StyledDesc>Powered by the UniSwapV2 Engine</StyledDesc>
    </StyledPageHeader>
    </Container>
  )
}

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
  line-height: 96px;
  text-align: center;
  max-width: 500px;
  img {
    @media (max-width: 768px) {
      max-width: 250px;
    }
  }
`

const StyledTitle = styled.h1`
  color: ${props => props.theme.color.grey[400]};
  font-size: 30px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  margin-top: 10px;
`

const StyledSubtitle = styled.h3`
  color: ${props => props.theme.color.grey[400]};
  font-size: 22px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`
const StyledDesc = styled.h3`
  color: ${props => props.theme.color.grey[400]};
  font-size: 20px;
  font-weight: 400;
  font-style: italic;
  margin: 0;
  margin-top: 30px;
  padding: 0;
  text-align: center;
`

export default PageHeader