export const findCity = (favoriteItems, name) =>
  favoriteItems.find((favorite) => favorite.favoriteCityName === name)
