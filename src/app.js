import express from "express";
const app = express();


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(6754, () => {
    console.log("Example app listening on port 6754!");
});