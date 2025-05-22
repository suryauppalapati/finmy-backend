process.loadEnvFile();

const config = {
  port: process.env.NODE_PORT,
  env: process.env.NODE_ENV,
};

export default config;
