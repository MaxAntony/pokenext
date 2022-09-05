import { Link, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import { default as NextLink } from "next/link";
import { FC } from "react";

export const Navbar: FC = () => {
  const { theme } = useTheme()
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 20px',
      backgroundColor: theme?.colors.gray100.value
    }} >
      <NextLink href={'/'}>
        <Link>
          <Image src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'} alt='icono de la aplicacion' width={70} height={70} />
          <Text h1>Pokemon</Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href={'/favorites'}>
        <Link>
          <Text >Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  )
}

