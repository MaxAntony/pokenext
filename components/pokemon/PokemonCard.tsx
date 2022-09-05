import { Card, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { PokemonData } from "../../ts";

type props = { pokemon: PokemonData }
export const PokemonCard: FC<props> = ({ pokemon: { id, image, name } }) => {
  const router = useRouter()
  const onClick = () => {
    router.push(`/pokemon/${id}`)
  }
  return (
    <Card isHoverable isPressable onClick={onClick}>
      <Card.Body css={{ p: 1 }}>
        <Card.Image src={image} width="100%" height={140}>
        </Card.Image>
      </Card.Body>
      <Card.Footer>
        <Row justify='space-between'>
          <Text transform='capitalize'>{name}</Text>
          <Text>#{id}</Text>
        </Row>
      </Card.Footer>
    </Card>

  )
}
