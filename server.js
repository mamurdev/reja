const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb://mamurazizovich_db_user:XZ0nBGB6HKoOvErF@ac-i2sk15q-shard-00-00.uricb38.mongodb.net:27017,ac-i2sk15q-shard-00-01.uricb38.mongodb.net:27017,ac-i2sk15q-shard-00-02.uricb38.mongodb.net:27017/?ssl=true&replicaSet=atlas-lj42ym-shard-0&authSource=admin&appName=Cluster0";
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("Error:", err);
    else {
      console.log("MongoDB connection succeeded");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running good on port: ${PORT}, http://localhost:${PORT}`,
        );
      });
    }
  },
);
