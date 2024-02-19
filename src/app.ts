import express from "express";
import { router as userApi } from "./routes/user.routes";
import { router as postApi } from "./routes/post.routes"; //ancora da settare

const app = express();
// app.use(express.json());
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ message: "SERVER IS RUNNING!" });
});

app.use("/users", userApi);
app.use("/posts", postApi);

app.listen(PORT, () => {
  console.log(`Server is online at http://localhost:${PORT}`);
});
