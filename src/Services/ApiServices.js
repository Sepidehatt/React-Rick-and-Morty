import { fetchClient } from "../ServiceClients/FetchClients";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const apiServices = {
  getCharacters: async (query) => {
    try {
      const url = `${baseUrl}/character/?page=${query.page}&name=${query.name}`;
      return await fetchClient.get(url);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  getEpisode: async (url) => {
    try {
      return await fetchClient.get(url);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
