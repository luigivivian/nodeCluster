import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '20s', target: 100 }, // below normal load
    { duration: '50s', target: 100 },
    { duration: '20s', target: 200 }, // normal load
    { duration: '50s', target: 300 },
    { duration: '20s', target: 400 }, // around the breaking point
    { duration: '20s', target: 200 }, // beyond the breaking point
    { duration: '50s', target: 50 },
  ],
  
};

export default function () {
  const BASE_URL = 'http://localhost:8000'; // make sure this is not production

  const responses = http.batch([
    ['GET', `${BASE_URL}/user`],
    ['GET', `${BASE_URL}/user`],
    ['GET', `${BASE_URL}/user`],
    ['GET', `${BASE_URL}/user`],
  ]);

  sleep(1);
}