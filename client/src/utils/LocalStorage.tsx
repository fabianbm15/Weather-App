import { CityLocalStorage } from "../types/cityLocalStorage";
import { City } from "../types/city";

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

export const getItemSearchedCity = (key: string): string[] => {
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

export const setItemSearchedCity = (key: string, data: string[]) => {
  return localStorage.setItem(key, JSON.stringify(data));
};

// Details City

export const getItemDetailsCity = (key: string): City["coord"][] => {
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

export const setItemDetailsCity = (key: string, data: City["coord"][]) => {
  return localStorage.setItem(key, JSON.stringify(data));
};
