import * as S from './style'
import React from 'react'
import LeftSidePanels from '../left-side-panels/index'
import RightSidePanels from '../right-side-panels/index'
import ImageOutput from '../image-output'
import usePokedex from '../../hooks/pokedex-hooks'
import InformationOutPut from '../information-output'

function Layout() {
  const { pokedexState } = usePokedex()

  return (
    <S.MainDiv className="App">
      <S.WrapperLayoutDiv>
        {pokedexState.hasPokemon ? (
          <>
            {pokedexState.loading ? (
              <>
                <LeftSidePanels>
                  <ImageOutput src="https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif" fitType="cover"/>
                </LeftSidePanels>
                <RightSidePanels>
                  <ImageOutput src="https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif" fitType="cover"/>
                </RightSidePanels>
              </>
            ) : (
              <>
                <LeftSidePanels>
                  <ImageOutput src={pokedexState.generalInfo.officialArtwork} fitType="contain"/>
                </LeftSidePanels>
                <RightSidePanels>
                  <InformationOutPut types={pokedexState} />
                </RightSidePanels>
              </>
            )}
          </>
        ) : (
          <>
            <LeftSidePanels>
              <ImageOutput src="https://i.gifer.com/Yg6z.gif" fitType="contain"/>
            </LeftSidePanels>
            <RightSidePanels>
              <p>Aguardando entrada de dados...</p>
            </RightSidePanels>
          </>
        )}
      </S.WrapperLayoutDiv>
    </S.MainDiv>
  )
}

export default Layout
