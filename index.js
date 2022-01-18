const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

// Source: https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/

// server listening 
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});