import { CityLocalStorage } from "../types/cityLocalStorage";

export const getItem = (key: string): CityLocalStorage[] => {
  try {
    const value: string | null = localStorage.getItem(key);

    if (value === null) {
      throw new Error(`No hay valor para la clave '${key}' en localStorage.`);
    }

    return JSON.parse(value);
  } catch (e) {
    return [];
  }
};

export const setItem = (key: string, data: CityLocalStorage[]) => {
  return localStorage.setItem(key, JSON.stringify(data));
};
