const pathBuilder = (mode: string) => {
  const production = "https://condelivery-api.vercel.app/";
  const development = "https://condelivery-api.vercel.app/";

  return mode === "production" ? production : development;
};
const baseURL = pathBuilder(import.meta.env.MODE);

export { baseURL };
