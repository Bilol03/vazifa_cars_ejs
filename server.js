import { app } from "./middlewares/app.js";
import { config } from 'dotenv'
config()

let PORT = process.env.PORT

app.listen(PORT, console.log("This server is running on http://localhost:" + PORT))