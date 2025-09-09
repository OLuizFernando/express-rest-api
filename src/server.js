const express = require("express");
const app = express();
const data = require("./data.json"); // https://jsonplaceholder.typicode.com/users

app.use(express.json());

app.get("/users", (req, res) => {
  res.status(200).json(data);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = data.find((usr) => usr.id == id);

  user ? res.status(200).json(user) : res.status(404).json();
});

app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) res.status(400).json();

  // Create a new user in database

  res.status(201).json({ name, email });
});

app.patch("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = data.find((usr) => usr.id == id);

  if (!user) return res.status(404).json();

  const { name } = req.body;

  user.name = name; // Change user name in database

  res.status(200).json(user);
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = data.find((usr) => usr.id == id);

  if (!user) return res.status(404).json();

  // Delete user in database

  res.status(204).json();
});

app.listen(3000, () => console.log("Server is running."));
