import express from "express";
import bodyParser from "body-parser";
import router from "./routes/routes.js";

const app = express();
app.use(bodyParser.json());
app.use(router);
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
