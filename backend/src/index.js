const express = require("express");
const app = express();
const porta = 3001;

app.listen(porta, () => {
  console.log("aplicação rodando na porta: ", porta);
});

app.get("/teste", (req, res) => {
  res.send("olá");
});
