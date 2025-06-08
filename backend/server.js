import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import userRoute from "./routes/user.route.js";
import macrosRoute from "./routes/macros.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/macros", macrosRoute);

console.log(process.env.MONGO_URI);

app.listen(PORT, () => {
    connectDB();
    console.log("Server running on http://localhost:" + PORT);
});
