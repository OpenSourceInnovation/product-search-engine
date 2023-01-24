import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

const PORT = process.env.PORT;


app.get("/", (req, res) => {
    res.send("Welcome to Product Search Engine!");
})


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
})

