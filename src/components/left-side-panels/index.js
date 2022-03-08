import * as S from './style'
import React from 'react'
import usePokedex from '../../hooks/pokedex-hooks'
import { ThemeProvider } from 'styled-components'
import getColor from './getColor'

function LeftSidePanels({children}) {

  const { pokedexState } = usePokedex()

  const theme = {
    color: "white"
  }

  getColor(pokedexState, theme)
  
  return (
    <S.LeftSideLayoutDiv>
      <S.LeftSideTopPanelDiv></S.LeftSideTopPanelDiv>
      
      <ThemeProvider theme={theme}>
        <S.LeftSideMiddlePanelDiv>
          <div>
            <div>
              {children}
            </div>
          </div>
        </S.LeftSideMiddlePanelDiv>
      </ThemeProvider>
      <S.LeftSideBottomPanelDiv>
        <div></div>
        <div></div>
      </S.LeftSideBottomPanelDiv>
    </S.LeftSideLayoutDiv>
  )
}

export default LeftSidePanels
