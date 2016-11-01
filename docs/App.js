
import React from 'react'
import {
  Div,
  Header,
  H1,
} from '../src/primitives'

const App = () => (
  <Div css={{
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    padding: 48
  }}>
    <Header css={cx.header}>
      <H1 css={cx.title}>Hello</H1>
    </Header>
  </Div>
)

const cx = {
  header: {
    marginBottom: 48
  },
  title: {
    fontSize: 48
  }
}

export default App
