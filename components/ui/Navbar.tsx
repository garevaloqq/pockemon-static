import { Link, Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image";
import LinkNext from "next/link";

export const Navbar = () => {

  const { theme } = useTheme();

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 20px',
      backgroundColor: theme?.colors.gray300.value
    }}>
      <Image
        src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"}
        alt="icon de la app"
        width={70}
        height={70}
      />

      <LinkNext href="/" passHref>
        <Link>
          <Text color="white" h3>Pokémon</Text>
        </Link>
      </LinkNext>

      <Spacer css={{ flex: 1 }} />
      <LinkNext href="/favorites" passHref>
        <Link>
          <Text color="white">Favorites</Text>
        </Link>
      </LinkNext>
    </div>
  )
}
