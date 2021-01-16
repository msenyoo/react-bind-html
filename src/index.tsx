import * as React from 'react'

const App = (props: { html: string }) => (
  <span
    style={{ whiteSpace: 'pre-line' }}
    dangerouslySetInnerHTML={{ __html: props.html }}
  ></span>
)

export default App
