
export const fetchClient = {
  get: async (url) => {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};