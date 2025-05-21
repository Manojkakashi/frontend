import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});

export const uploadFiles = files => {
  const form = new FormData();
  files.forEach(f => form.append('files', f));
  return api.post('/upload', form);
};
