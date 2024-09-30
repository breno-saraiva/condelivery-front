const pathBuilder = (mode: string) => {
  const production = "https://enterprise-2024-backend.vercel.app/";
  const development = "https://enterprise-2024-backend.vercel.app/";

  return mode === "production" ? production : development;
};
const baseURL = pathBuilder(import.meta.env.MODE);

export { baseURL };
