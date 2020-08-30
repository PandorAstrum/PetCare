// Apollo Server import

const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

// resolvers and mongo models import
const resolvers = require("./resolvers");
const User = require("./Model/User");
const Pet = require("./Model/Pet");

// type defs imports and read as a file
const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "typeDefs.gql");
const typeDefs = fs.readFileSync(filepath, "utf-8");

// read environment config
require("dotenv").config({ path: "../.env" });

// db connection
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => console.error(err));

// Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    User,
    Pet,
  },
});

server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`);
});
