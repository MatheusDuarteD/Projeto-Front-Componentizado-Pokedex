import React, { useState } from 'react'
import * as S from './style'
import usePokedex from '../../hooks/pokedex-hooks'


function RightSidePanels( {children} ) {

  const { getPokemon } = usePokedex()
  const [pokenameForSearch, setPokenameForSearch] = useState()

  const submitGetPokemon = (e) => {
    e.preventDefault()
    if(!pokenameForSearch) return
    return getPokemon(pokenameForSearch)
  }

  return (
    <S.RightSideLayoutDiv>

      <S.RightSideTopPanelDiv>
        <S.WrapperInformationOutput>
          {children}
        </S.WrapperInformationOutput>
      </S.RightSideTopPanelDiv>

      <S.RightSideBottomPanelDiv>
        <form onSubmit={submitGetPokemon}>
          <S.WrapperInput type="text" placeholder="Insira o nome do pokemon" 
          onClick={(e) => {
            e.target.placeholder = ""
          }}
          onChange={(e) => {
            
            setPokenameForSearch(e.target.value.toLowerCase())
          }}/>
          <S.WrapperSubmit type="submit" value="Enviar"/>
        </form>
      </S.RightSideBottomPanelDiv>

    </S.RightSideLayoutDiv>
  )
}

export default RightSidePanels
