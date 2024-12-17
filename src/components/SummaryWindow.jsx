import React from 'react'
import styled from 'styled-components'

const Window = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 2rem;
`

const Title = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #333;
`

const Content = styled.div`
  min-height: 150px;
  white-space: pre-wrap;
`

const SummaryWindow = ({ summary }) => {
  return (
    <Window>
      <Title>Summary</Title>
      <Content>
        {summary || 'Summary will appear here...'}
      </Content>
    </Window>
  )
}

export default SummaryWindow
