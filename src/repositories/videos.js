import config from '../config';

const VIDEOS_URL = `${config.URL_BACKEND_API}/videos`;

function create(videoObject) {
  return fetch(`${VIDEOS_URL}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoObject),
  })
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }

      throw new Error('Não foi possível cadastrar os dados do servidor.');
    });
}

export default {
  create,
};
