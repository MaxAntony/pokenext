import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon } from "../../ts";
import { localFavorites } from "../../utils";

type props = { pokemon: Pokemon }
const PokemonPage: NextPage<props> = ({ pokemon }) => {
  const [isInFavorites, SetIsInFavorites] = useState(localFavorites.existInFavorites(pokemon.id))
  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id)
    SetIsInFavorites(!isInFavorites)
  }
  useEffect(() => {
  }, [])
  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || 'no-image.png'}
                alt={pokemon.name}
                width='100%'
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform="capitalize">{pokemon.name}</Text>
              <Button color={'gradient'} ghost={!isInFavorites} onClick={onToggleFavorite}>{isInFavorites ? 'En favoritos' : 'Guardar en favoritos'}</Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites: </Text>
              <Container direction="row" display="flex" gap={0}>
                <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container >
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (_) => {
  const pokemon151 = [...Array(151)].map((_, i) => `${i + 1}`)
  const paths = pokemon151.map(id => ({ params: { pokemonId: id } }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { pokemonId } = params as { pokemonId: string }
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${pokemonId}`)
  return {
    props: {
      pokemon: data
    }
  }
}


export default PokemonPage
