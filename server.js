import { app } from "./middlewares/app.js";
import { config } from "dotenv";
config();

let PORT = process.env.PORT;

app.listen(
  8080,
  console.log("This server is running on http://localhost:" + 8080)
);
