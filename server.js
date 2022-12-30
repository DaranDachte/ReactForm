import express, { request, Router } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
const { Schema, model } = mongoose;

dotenv.config();
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());
mongoose.set("strictQuery", true);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("we are connected to the database.");
  })
  .catch((error) => {
    console.log("an error occurred while connecting ot the db", error);
  });

app.listen(process.env.PORT || 3001, (req, res) => {
  console.log(`the server listening on port ${PORT}`);
});

// Schema
const questionsSchema = new Schema({
  topic: {
    type: String,
    required: true,
    enum: {
      values: [
        "I have depression",
        "Question for a lawyer",
        "Social help",
        "Work in Germany",
        "Education",
        "Medicine and health",
        "Violence in family",
        "Other",
      ],
    },
  },
  name: { type: String, required: true },
  text: { type: String, required: true },
});

// Model
const Question = model("Question", questionsSchema);

// Routing
const router = Router();
router.post("/questions", async (req, res) => {
  const { topic, name, text } = req.body;
  try {
    const question = await Question.create({ topic, name, text });
    res.json(question);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
});

app.use("/", router);
