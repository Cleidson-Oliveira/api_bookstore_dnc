import express from "express";
import cors from "cors";
import env from "dotenv";
import bookRoutes from "./routes/books";

env.config();

const app = express();
const port = process.env.PORT || "3000";

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send(`
        <p>Routes:</p><br/>
        <a href="/livros">All books</a>
    `)
})

app.use("/livros", bookRoutes);

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
})