import "reflect-metadata";
import { createConnection } from "typeorm";
//load entity
import { User } from "../../entity/User";
import { getRepository, getConnection } from "typeorm";

module.exports = {
  // ---------------------------------------------------------------------------
  // GET /users
  getAllUser: async (req, res) => {
    const users = await getRepository(User).find();
    res.send(users);
  },
  // ---------------------------------------------------------------------------
  // GET /users/:id
  getOneUser: async (req, res) => {
    const users = await getRepository(User).find();
    res.send(users);
  }
};
