import { Grid } from "@nextui-org/react";
import { FavoriteCardPokemon } from "../pokemon/FavoriteCardPokemon";

interface Props {
  pokemons: number[]
}

export const FavoritePokemons = ({ pokemons }: Props) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start' >
      {pokemons.map(id => (
        <Grid key={id} xs={6} sm={3} md={2} xl={1}>
          <FavoriteCardPokemon id={id} />
        </Grid>
      ))}
    </Grid.Container>);
}
