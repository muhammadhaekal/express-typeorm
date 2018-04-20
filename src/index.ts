import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Todo } from "./entity/Todo";
import * as express from "express";

createConnection()
  .then(async connection => {
    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);
    //
    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);
    // // -----------------------
    // const todo = new Todo();
    // todo.text = "Learn NodeJS";
    //
    // await connection.manager.save(todo);
    // console.log("Saved a new todo with id: " + todo.id);
    //
    // const todos = await connection.manager.find(Todo);
    // console.log("Loaded users: ", todos);
    //
    // // -----------------------
    //
    // console.log("Here you can setup and run express/koa/any other framework.");
    const app = express();

    app.get("/", async (req, res) => {
      const users = await connection.manager.find(User);
      res.send(users);
    });

    app.listen(8000, () => console.log("listening"));
  })
  .catch(error => console.log(error));
