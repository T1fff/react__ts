import axios from 'axios'

export const callTodos = async () => {
    const headersList = {
      Accept: '*/*',
      'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
      Authorization: 'Bearer patfYzEyICL5F9BEh.68047c0b66a0be6d32d0c9355e874b2d791529579a87d9378c1a34f67966b54a',
    };
  
    const reqOptions = {
      url: 'https://api.airtable.com/v0/app2izY1lRJsYauhK/Imported%20table?sort%5B0%5D%5Bfield%5D=id&sort%5B0%5D%5Bdirection%5D=asc',
      method: 'GET',
      headers: headersList,
    };
  
    return axios.request(reqOptions);
    /* return response.data.records; */
  };
