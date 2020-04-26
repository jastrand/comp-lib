import React from 'react'
import styled from 'styled-components/macro'

const Button = styled.button`
  display: flex;
  flex-direction: row;
  background: lightgray;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  padding: 12px;
  border-radius: 50%;
  font-size: 24px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0,0,0,.12);
`

const ButtonIcon = styled.p`
  margin-right: 5px;
`

const ButtonText = styled.p`
`

export const MyButton = ({ className, buttonIcon, buttonText }) => {
  return (
    <Button className={className}>
      {buttonIcon && <ButtonIcon>{buttonIcon}</ButtonIcon>}
      {buttonText && <ButtonText>{buttonText}</ButtonText>}
    </Button>
  )
}

