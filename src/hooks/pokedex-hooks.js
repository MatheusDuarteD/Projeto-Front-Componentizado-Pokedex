import { useContext } from "react";
import { PokedexContext } from "../providers/pokedex-provider";

const usePokedex = () => {
  const { pokedexState, getPokemon } = useContext(PokedexContext)

  return { pokedexState, getPokemon }
}

export default usePokedex