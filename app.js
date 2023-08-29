const express = require("express");
const usersRoutes = require("./user/user");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Use the route files
app.use("/users", usersRoutes);
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/api/greet", (req, res) => {
  const name = req.query.name || "Stranger";
  res.json({ message: `Hello, ${name}!` });
});
