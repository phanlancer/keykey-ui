import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CountDown: React.FC = () => {
  return (
    <StyledWrapper 
      data-type="countdown" 
      data-id="2161678" 
      className="tickcounter"
    >      
      <StyledLink href="//www.tickcounter.com/countdown/2161678/lock-pre-mine-closing" 
      title="$LOCK Pre-mine Closing">
        $LOCK Pre-mine Closing
      </StyledLink>
      <StyledLink href="//www.tickcounter.com/" title="Countdown">Countdown
      </StyledLink>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  max-width: 400px; 
  height: 100px; 
  margin: 0 auto;
`
const StyledLink = styled.a`
  font-size : 18px;
`

export default CountDown