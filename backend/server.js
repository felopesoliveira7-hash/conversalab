import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  const { message } = req.body;
  res.json({ reply: "Resposta do sistema: " + message });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Backend rodando na porta " + port));
