let IS_PROD = true;
const server = IS_PROD
  ? "https://video-conferencing-app-backend.onrender.com  "
  : "http://localhost:8001";

export default server;
