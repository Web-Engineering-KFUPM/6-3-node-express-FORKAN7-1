// TODO 1: Import and Create express app instance
import express from "express";
import { getRandomQuote } from "./quotes.js";
// TODO 1: Define server port
const PORT = process.env.PORT || 3000;



// TODO 4: Import and Apply CORS middleware
import cors from "cors";
const app = express();
app.use(cors());



// TODO 5: Import and apply Morgan middleware
import morgan from "morgan";
app.use(morgan("dev"));


// TODO 6.1: Create root route "/"
app.get("/", (req, res) => {
  res.send("Welcome to my API server!");
});


// TODO 6.2: Create "/api/quote" route
aapp.get("/api/quote", (req, res) => {
  const quote = getRandomQuote();
  res.json({ quote });
});



// TODO 7: Start server using app.listen
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost: ${PORT}`);
});
