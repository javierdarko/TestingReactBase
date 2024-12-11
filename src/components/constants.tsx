import { IPokemonDetails } from "./MainComponent/interfaces";

export const MENULIST = {
  MENU: "Mostrar lista",
  RANDOM: "Pokémon aleatorio",
  MODE: " Cambiar a modo: ",
  LIGHT: "Claro",
  DARK: "Oscuro",
};

export const POKELIST = {
  TITLE: "Lista de Pokémon",
  DESCRIPTION: "Busca nombre o número",
  POKEMON: "Ver Pokémon",
  ERROR: "No se encontraron Pokémon que coincidan con la búsqueda.",
};

export const DETAILSPOKEMON = {
  RETURN: "Regresar",
  NUMBER: "N° Pokédex: #",
  ABILITIES: "Habilidades: ",
  MOVESET: "Movimientos: ",
  TYPE: "Tipo: ",
  WEIGHT: "Peso: ",
};

export type StatName =
  | "hp"
  | "attack"
  | "defense"
  | "special-attack"
  | "special-defense"
  | "speed";

export const STAT_NAMES: Record<StatName, string> = {
  hp: "Vida",
  attack: "Ataque",
  defense: "Defensa",
  "special-attack": "Ataque Especial",
  "special-defense": "Defensa Especial",
  speed: "Velocidad",
};
export const defaultPokemonDetails: IPokemonDetails = {
  id: 0,
  name: "",
  base_experience: 0,
  height: 0,
  is_default: false,
  order: 0,
  weight: 0,
  abilities: [],
  forms: [],
  game_indices: [],
  held_items: [],
  location_area_encounters: "",
  moves: [],
  species: {
    name: "",
    url: "",
  },
  sprites: {
    front_default: "",
    front_female: "",
    front_shiny: "",
    front_shiny_female: "",
    back_default: "",
    back_female: "",
    back_shiny: "",
    back_shiny_female: "",
    other: {
      dream_world: {
        front_default: "",
        front_female: "",
        front_shiny: "",
        front_shiny_female: "",
        back_default: "",
        back_female: "",
        back_shiny: "",
        back_shiny_female: "",
      },
      home: {
        front_default: "",
        front_female: "",
        front_shiny: "",
        front_shiny_female: "",
        back_default: "",
        back_female: "",
        back_shiny: "",
        back_shiny_female: "",
      },
      "official-artwork": {
        front_default: "",
        front_female: "",
        front_shiny: "",
        front_shiny_female: "",
        back_default: "",
        back_female: "",
        back_shiny: "",
        back_shiny_female: "",
      },
    },
    versions: {},
  },
  stats: [
    {
      base_stat: 0,
      effort: 0,
      stat: {
        name: "",
        url: "",
      },
    },
  ],
  types: [
    {
      slot: 0,
      type: {
        name: "",
        url: "",
      },
    },
  ],
};
