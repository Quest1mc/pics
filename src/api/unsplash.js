import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization:
          "Client-ID 079f8617943304632b6b8db110d494f0b67c7b589130003c88ee53726a882323"
      }
});