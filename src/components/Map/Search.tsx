import React, { useState } from 'react'
import styled from 'styled-components'
import Map from '@/components/Map/Map'

function Search() {
  const [inputText, setInputText] = useState('')
  const [place, setPlace] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPlace(inputText)
    setInputText('')
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          onChange={handleInputChange}
          value={inputText}
        />
        <button type="submit">검색</button>
      </StyledForm>
      <Map searchPlace={place} />
    </>
  )
}

const StyledForm = styled.form``

export default Search
