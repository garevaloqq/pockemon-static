import { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { Layout } from '../../components/layouts';
import { NotFavorites, FavoritePokemons } from '../../components/ui';
import { localFavorites } from '../../utils';

const FavoritesPage: NextPage = () => {
  const [favorites, setfavorites] = useState<number[]>([]);

  useEffect(() => {
    setfavorites(localFavorites.getFavorites());

  }, [])

  return (
    <Layout title='Favorites pokemon'>
      {favorites.length === 0
        ? <NotFavorites />
        : <FavoritePokemons pokemons={favorites} />
      }
    </Layout>
  )
}

export default FavoritesPage
