import { Grid, Card, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { SmallPokemon } from "../../interfaces";

export const PokemonCard = ({ id, name, img }: SmallPokemon) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${name}`);
  }
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card isHoverable isPressable onClick={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={img}
            width="100%"
            height={140}
          />
          <Card.Footer>
            <Row justify="space-between">
              <Text transform="capitalize">{name}</Text>
              <Text>#{id}</Text>
            </Row>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Grid>
  )
}
