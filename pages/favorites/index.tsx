import { Card, Grid } from "@nextui-org/react";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";

const Favorites: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, [])

  return (
    <Layout title="Pokemon Favoritos">
      {
        favoritePokemons.length === 0
          ? <NoFavorites />
          : (
            <Grid.Container gap={2} direction='row' justify="flex-start">
              {favoritePokemons.map(id => (
                <Grid xs={6} sm={3} md={2} xl={1} key={id}>
                  <Card isHoverable isPressable css={{ padding: 10 }} >
                    <Card.Image
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                      width={'100%'} />
                  </Card>
                </Grid>
              ))}
            </Grid.Container>
          )
      }
    </Layout>
  )
}

export default Favorites
