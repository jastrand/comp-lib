import React from 'react'
import styled from 'styled-components/macro'
import { Card } from 'lib/Card'
import { MyButton } from 'lib/MyButton'
import { Chips } from 'lib/Chips'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const ThinnerCard = styled(Card)`
  width: 400px;
`

const AnotherChips = styled(Chips)`
  background-color: lightpink;
  border: none;
  width: 200px;
`

export const App = () => {
  return (
    <div>
      <Chips title="hello" thumbNailUrl="https://www.fillmurray.com/100/100" />
      <AnotherChips title="hello" />
      <Chips title="hello" faCheckCircle={faCheckCircle} />
      <Chips title="hello" faTimesCircle={faTimesCircle} />
      <ThinnerCard
        coverImage="https://www.fillmurray.com/500/300"
        thumbnailUrl="https://www.fillmurray.com/100/100"
        title="Title"
        secondaryText="This is a paragraph" />

      <Card
        title="Something else"
        secondaryText="something more" />

      <Card><h1>Children are here</h1></Card>
      <MyButton buttonIcon="+" buttonText="Click" />
      <MyButton buttonIcon="" />
    </div>
  )
}