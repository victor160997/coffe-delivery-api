import express from "express";
import db from "./models";

const app = express();
const port = 5001;

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Listen on port ${port}`);
  });
});
