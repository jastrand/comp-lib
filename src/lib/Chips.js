import React from 'react'
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
  border-radius: 6px;
  background: rgba(76, 175, 80, 0.1);
  padding: 5px;
  width: fit-content;
  margin-bottom: 10px;
  border: 1px solid #ccc;
`

const Content = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: center;
  `

const ThumbNail = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  margin-right: 10px;
`

const Title = styled.p`
  margin: 0 5px 0 5px;
  padding: 0;
`

const CheckIcon = styled.span`
  color: #ccc
`
const RemoveIcon = styled.span`
  color: red;
`

export const Chips = ({ className, thumbNailUrl, title, faCheckCircle, faTimesCircle }) => {
  return (
    <Container className={className}>
      <Content>
        <CheckIcon>
          {faCheckCircle && <FontAwesomeIcon icon={faCheckCircle} />}
        </CheckIcon>
        {thumbNailUrl && <ThumbNail url={thumbNailUrl} />}
        {title && <Title>{title}</Title>}
        <RemoveIcon>
          {faTimesCircle && <FontAwesomeIcon icon={faTimesCircle} />}
        </RemoveIcon>
      </Content>
    </Container>
  )
}

