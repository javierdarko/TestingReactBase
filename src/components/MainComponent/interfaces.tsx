import { AxiosError } from "axios";

export interface ThemeContextProps {
  isDarkMode: boolean;
  setIsDarkMode: (e: boolean) => void;
}

export type IGetPokemonListState = {
  loading: boolean;
  data: ListPokemon[];
  error: boolean;
  errorData: null | AxiosError;
};
export type IGetPokemonListSearch = {
  loading: boolean;
  data: null | IPokemonDetails;
  error: boolean;
  errorData: null | AxiosError;
  dataInput: string;
};

export interface ListPokemon {
  name: string;
  url: string;
}

export interface IPokemonDetails {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: NamedAPIResource[];
  game_indices: GameIndex[];
  held_items: HeldItem[];
  location_area_encounters: string;
  moves: Move[];
  species: NamedAPIResource;
  sprites: Sprites;
}

interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
}

interface NamedAPIResource {
  name: string;
  url: string;
}

interface GameIndex {
  game_index: number;
  version: NamedAPIResource;
}

interface HeldItem {
  item: NamedAPIResource;
  version_details: VersionDetail[];
}

interface VersionDetail {
  rarity: number;
  version: NamedAPIResource;
}

interface Move {
  move: NamedAPIResource;
  version_group_details: VersionGroupDetail[];
}

interface VersionGroupDetail {
  level_learned_at: number;
  version_group: NamedAPIResource;
  move_learn_method: NamedAPIResource;
}

interface Sprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other?: OtherSprites;
  versions?: Versions;
}

interface OtherSprites {
  dream_world: OtherSpriteDetails;
  home: OtherSpriteDetails;
  "official-artwork": OtherSpriteDetails;
  showdown?: OtherSpriteDetails;
}

interface OtherSpriteDetails {
  front_default: string | null;
  front_female: string | null;
  front_shiny?: string | null;
  front_shiny_female?: string | null;
  back_default?: string | null;
  back_female?: string | null;
  back_shiny?: string | null;
  back_shiny_female?: string | null;
}

interface Versions {
  [generation: string]: {
    [game: string]: SpriteSet;
  };
}

interface SpriteSet {
  back_default: string | null;
  back_gray?: string | null;
  back_shiny?: string | null;
  back_female?: string | null;
  front_default: string | null;
  front_gray?: string | null;
  front_shiny?: string | null;
  front_female?: string | null;
}
