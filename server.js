const express = require("express");
const path = require("path");
const knex = require("knex");
const db = require("./models/knexfile");
const app = express();
const port = process.env.PORT || 3000;
// const publicPath = path.join(__dirname, "..", ".\\Kampai-Cocktails\\public");

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());

// Here are all the API routes (router folder??)
// Figure out, register (or sign up), sign in, display favorite drinks.

app.get("/api/users", async (req, res) => {
  try {
    console.log("A request for all users in db was made.");

    const users = await knex(db).select().table("users");
    res.json(users);
  } catch (err) {
    console.error("Error grabbing all users from database.", err);
    res.sendStatus(500);
  }
});

app.get("/api/users/:id", async (req, res) => {
  try {
    console.log(
      "A request to grab one user has been made.\nUser ID: ",
      req.body.id
    );

    const user = await knex(db).table("users").where("id", req.body.id).first();

    console.log("This is the user\n", user);

    res.json(user).status(200);
  } catch (err) {
    console.error("Error grabbing one user from database.", err);
    res.sendStatus(500);
  }
});

app.post("/api/user", (req, res) => {
  try {
    console.log("A post request was made below.\n", req.body);

    return knex(db)
      .table("users")
      .insert(req.body)
      .then(() => {
        res.send({ message: "success" }).status(201);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.error("Error posting into the database.", err);
    res.sendStatus(500);
  }
});

app.patch(`/api/user/:id`, (req, res) => {
  try {
    console.log(
      "A request to update an existing entry has been made: ",
      req.body
    );

    return knex(db)
      .table("users")
      .where({ id: req.body.id })
      .update({ drinks: req.body.drinks })
      .then(() => {
        res.send({ message: "success" }).status(201);
      });
  } catch (err) {
    console.error("Error updating an entry in the database.", err);
    res.sendStatus(500);
  }
});

app.delete("/api/user/:id", (req, res) => {
  try {
    console.log("A request to delete a user has been made: ", req.body);

    return knex(db)
      .table("users")
      .where({ id: req.body.id })
      .del()
      .then(() => {
        res.send({ message: "success" }).status(200);
      });
  } catch (err) {
    console.error("Error trying to delete in the database", err);
    res.sendStatus(500);
  }
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
