import axios from "axios";

function httpClientBuilder() {
  const client = axios.create({});

  return client;
}

const http = httpClientBuilder();

export { http };
