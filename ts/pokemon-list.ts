export interface PokemonListResponse {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonSmall[];
}

export interface PokemonSmall {
  name: string;
  url: string;
}

export interface PokemonData extends PokemonSmall {
  id: number
  image: string
}

