import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import UserRouter from "./routes/userRoute.js";
import PostRouter from "./routes/postRoute.js";
import adminRouter from "./routes/adminRouter.js";
import multer from "multer";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  "./assets/images/upload",
  express.static(
    path.join(__dirname, "../frontend/public/assets/images/upload/")
  )
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//* for image

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../frontend/public/assets/images/upload/");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File successfully uploaded");
  } catch (error) {
    console.log(error);
  }
});

//*Router
app.use("/api/posts", PostRouter);
app.use("/api/users", UserRouter);
app.use("/api/admin", adminRouter);

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to db");
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log("Server listening on port " + port);
    });
  })
  .catch((err) => console.log(err.message));
