import React from 'react'
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = styled.button`
  background: light-grey;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  padding: 12px;
  border-radius: 50%;
  font-size: 24px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0,0,0,.12);
  margin: 10px;
`

const ButtonIcon = styled.span`
  color: darkslategrey;
`

const ButtonText = styled.p`
  margin-left: 5px;
`
const Content = styled.div`
  display: flex; 
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 3px;
  `

export const MyButton = ({ className, buttonIcon, buttonText }) => {
  return (
    <Button className={className}>
      <Content>
        {buttonIcon && <ButtonIcon><FontAwesomeIcon icon={buttonIcon} /></ButtonIcon>}
        {buttonText && <ButtonText>{buttonText}</ButtonText>}
      </Content>
    </Button>
  )
}

