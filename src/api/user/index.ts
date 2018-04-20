import { Router } from "express";
const router = Router();
import { User } from "../../entity/User";
import { createConnection, getRepository } from "typeorm";

const controller = require("./controller");

createConnection()
  .then(async connection => {
    router.get("/", async (req, res) => {
      const users = await getRepository(User).find();
      res.send(users);
    });
  })
  .catch(error => console.log(error));

module.exports = router;
