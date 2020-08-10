import config from '../config';

const CATEGORIES_URL = `${config.URL_BACKEND_API}/categorias`;

function getAll() {
  return fetch(`${CATEGORIES_URL}`)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }

      throw new Error('Não foi possível carregar os dados do servidor.');
    });
}

function getAllWithVideos() {
  return fetch(`${CATEGORIES_URL}?_embed=videos`)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }

      throw new Error('Não foi possível carregar os dados do servidor.');
    });
}

export default {
  getAll,
  getAllWithVideos,
};
