import express from 'express';

const app = express();
const __dirname = process.cwd();
const PORT = 5505

app.use(express.static(__dirname + "/public"));


app.get("/", (req, res) => {
  res.sendFile("/public/index.html", { root: __dirname });
});

app.listen(PORT);

app.on("listening", () => {
  console.log("SCHISJIJZ Is On http://localhost:" + PORT);
});
