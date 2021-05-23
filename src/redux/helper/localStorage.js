export const setToStorage = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data))

export const getFromStorage = (key) => JSON.parse(localStorage.getItem(key))
