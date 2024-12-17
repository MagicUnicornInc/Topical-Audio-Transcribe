import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 2rem;
`

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`

const FilterButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    background: #0056b3;
  }
`

const PreviewWindow = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  min-height: 150px;
`

const TopicalFilter = ({ onFilter, topicalContent }) => {
  const [topic, setTopic] = useState('')

  const handleFilter = () => {
    onFilter(topic)
  }

  return (
    <Container>
      <Input
        type="text"
        placeholder="Enter topic to filter (e.g., 'meeting action items')"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <FilterButton onClick={handleFilter}>Filter Content</FilterButton>
      <PreviewWindow>
        {topicalContent || 'Filtered content will appear here...'}
      </PreviewWindow>
    </Container>
  )
}

export default TopicalFilter
