require("dotenv").config();
const server = require("./api/server");

//env 5000
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
