const pathBuilder = (mode: string) => {
  const production = "";
  const development = "http:/localhost:8080";

  return mode === "production" ? production : development;
};
const baseURL = pathBuilder(import.meta.env.MODE);

export { baseURL };
