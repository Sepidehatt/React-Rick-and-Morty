const baseUrl = 'https://rickandmortyapi.com/api'

export class ApiServices {
  
    constructor(httpClient) {
      this.httpClient = httpClient;
    }

    async getCharacters(){
      try {
        const response = await this.httpClient.get(`${baseUrl}/character`)
        return response.json();
      } catch (error) {
        console.log(error)
      }
    }

    async getEpisodes(){
      try {
        const response = await this.httpClient.get()
        return response.json();
      } catch (error) {
        console.log(error)
      }
    }

    async getEpisode(url){
      try {
        const response = await this.httpClient.get(url)
        return response.json();
      } catch (error) {
        console.log(error)
      }
    }

  }