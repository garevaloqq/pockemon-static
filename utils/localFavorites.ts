import { type } from "os";

const toggleFavorites = (id: number) => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((el) => el !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const isFavorite = (id: number): boolean => {
  if (typeof window === "undefined") return false;

  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  return favorites.includes(id);
};

const getFavorites = (): number[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

export default {
  toggleFavorites,
  isFavorite,
  getFavorites,
};
