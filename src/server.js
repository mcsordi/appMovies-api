const PORT = process.env.PORT || 3001;
import app from "./app.js";

app.listen(PORT, () => {
  console.log(`servidor rodando na porta ${PORT}`);
});
