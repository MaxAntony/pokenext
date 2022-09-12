import { Grid } from '@nextui-org/react'
import type { GetStaticProps, NextPage } from 'next'
import { pokeApi } from '../api'
import { Layout } from '../components/layouts'
import { PokemonCard } from '../components/pokemon'
import { PokemonData, PokemonListResponse } from '../ts'


type props = { pokemons: PokemonData[] }
const Home: NextPage<props> = ({ pokemons }) => {
  return (
    <Layout title='Pokemon'>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map((pokemon) => (
          <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
            <PokemonCard pokemon={pokemon} />
          </Grid>
        ))}
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<{ pokemons: PokemonData[] }> = async (_) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  const pokemons: PokemonData[] = data.results.map((poke) => {
    let id = poke.url.split('/').filter(e => e !== '').pop() || '0'
    let pokemon: PokemonData = {
      ...poke,
      id: +id,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`

    }
    return pokemon
  })
  return {
    props: {
      pokemons
    }
  }
}


export default Home
