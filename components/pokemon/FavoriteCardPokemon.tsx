import { Card } from "@nextui-org/react";
import { useRouter } from 'next/router';

interface Props {
  id: number
}

export const FavoriteCardPokemon = ({ id }: Props) => {
  const router = useRouter();
  const onFavoriteClicked = () => {
    router.push(`/pokemon/${id}`);
  }

  return (
    <Card
      isHoverable
      isPressable
      css={{ padding: '10px' }}
      onClick={onFavoriteClicked}
    >
      <Card.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        alt={`${id}`}
        width="100%"
        height={140}
      />
    </Card>
  )
}
