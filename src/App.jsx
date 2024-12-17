import React, { useState } from 'react'
import styled from 'styled-components'
import FileUpload from './components/FileUpload'
import TranscriptionWindow from './components/TranscriptionWindow'
import TopicalFilter from './components/TopicalFilter'
import SummaryWindow from './components/SummaryWindow'
import ExportButtons from './components/ExportButtons'

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`

const App = () => {
  const [transcription, setTranscription] = useState('')
  const [topicalContent, setTopicalContent] = useState('')
  const [summary, setSummary] = useState('')

  const handleFileUpload = (file) => {
    // Simulate transcription
    setTimeout(() => {
      setTranscription('This is a simulated transcription of the audio file...')
      setSummary('This is a simulated summary of the transcription...')
    }, 2000)
  }

  const handleTopicalFilter = (topic) => {
    // Simulate topic filtering
    setTopicalContent(`Filtered content related to "${topic}"...`)
  }

  return (
    <AppContainer>
      <Title>Audio Transcription App</Title>
      <FileUpload onUpload={handleFileUpload} />
      <TranscriptionWindow transcription={transcription} />
      <TopicalFilter onFilter={handleTopicalFilter} topicalContent={topicalContent} />
      <SummaryWindow summary={summary} />
      <ExportButtons
        transcription={transcription}
        topicalContent={topicalContent}
        summary={summary}
      />
    </AppContainer>
  )
}

export default App
