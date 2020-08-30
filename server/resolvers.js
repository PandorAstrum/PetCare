const { Error } = require("mongoose");

module.exports = {
  Query: {
    allPet: async (_, args, { Pet }) => {
      const allpets = await Pet.find({}).sort({ createdAt: "desc" }).populate({
        path: "OwnedBy",
        model: "User",
      });
      return allpets;
    },

    allUser: async (_, args, { User }) => {
      const allusers = await User.find({}).sort({ joinDate: "desc" });
      return allusers;
    },
    // getUser: User!
    // getPet: Pet!
  },

  Mutation: {
    addUser: async (_, { username, email, password }, { User }) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new Error("User already exist");
      }
      const newUser = await new User({ username, email, password }).save();
      return newUser;
    },
    addPet: async (_, { name, categories, gender, age, OwnerID }, { Pet }) => {
      const newPet = await new Pet({
        name,
        categories,
        gender,
        age,
        OwnedBy: OwnerID,
      }).save();
      return newPet;
    },
  },
};
