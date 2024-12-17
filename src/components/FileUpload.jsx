import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'

const DropzoneContainer = styled.div`
  border: 2px dashed #ccc;
  border-radius: 4px;
  padding: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: #666;
  }
`

const FileUpload = ({ onUpload }) => {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0]
    if (file) {
      onUpload(file)
    }
  }, [onUpload])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'audio/*': ['.mp3', '.wav', '.ogg']
    }
  })

  return (
    <DropzoneContainer {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the audio file here...</p>
      ) : (
        <p>Drag and drop an audio file here, or click to select a file</p>
      )}
    </DropzoneContainer>
  )
}

export default FileUpload
