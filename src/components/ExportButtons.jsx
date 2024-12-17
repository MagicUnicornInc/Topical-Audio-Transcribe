import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`

const ExportButton = styled.button`
  background: #28a745;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #218838;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`

const ExportButtons = ({ transcription, topicalContent, summary }) => {
  const exportToFile = (content, filename) => {
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <ButtonContainer>
      <ExportButton
        disabled={!transcription}
        onClick={() => exportToFile(transcription, 'transcription.txt')}
      >
        Export Transcription
      </ExportButton>
      <ExportButton
        disabled={!topicalContent}
        onClick={() => exportToFile(topicalContent, 'topical-content.txt')}
      >
        Export Topical Content
      </ExportButton>
      <ExportButton
        disabled={!summary}
        onClick={() => exportToFile(summary, 'summary.txt')}
      >
        Export Summary
      </ExportButton>
    </ButtonContainer>
  )
}

export default ExportButtons
