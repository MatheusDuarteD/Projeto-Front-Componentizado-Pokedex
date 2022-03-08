import { createContext, useCallback, useState } from "react";
import api from "../services/api"


import React from 'react';

export const PokedexContext = createContext({
  loading: false,
  generalInfo: {},
})


function PokedexProvider({ children }) {
  const [pokedexState, setPokedexState] = useState({
    hasPokemon: false,
    loading: false,
    generalInfo:{
      id: 0,
      officialArtwork: undefined,
      name: undefined,
      types: undefined,
      height: 0,
      weight: 0,
    }
  })
  
  const getPokemon = (pokeName) => {

    setPokedexState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }))

    api
      .get(`pokemon/${pokeName}`)
      .then(({ data }) => {
        setPokedexState((prevState) => ({
          ...prevState,
          hasPokemon: true,
          generalInfo: {
            id: data.id,
            officialArtwork: data.sprites.other["official-artwork"].front_default,
            name: data.name,
            types: data.types,
            height: data.height,
            weight: data.weight,
          }
        }))
      })
      .finally(() => {
        setPokedexState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }))
      })
      
  }

  const contextValue = {
    pokedexState,
    getPokemon: useCallback((pokeName) => getPokemon(pokeName), [])
  }

  return (
    <PokedexContext.Provider value={contextValue}>
      {children}
    </PokedexContext.Provider>
  )
}

export default PokedexProvider;