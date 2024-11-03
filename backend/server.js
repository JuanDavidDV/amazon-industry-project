import express from 'express';
import "dotenv/config";
import cors from "cors";
import reviewsRoutes from "./routes/reviews.js";

const app = express();
const { CORS_ORIGIN } = process.env;
const PORT = process.env.PORT || 5051;

app.use(cors({ CORS_ORIGIN }));
app.use(express.json());
app.use("/", reviewsRoutes);


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
}); 