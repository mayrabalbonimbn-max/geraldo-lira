import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({ quiet: true });

const port = Number(process.env.PORT || 4002);

app.listen(port, () => {
  console.log(`Backend do catalogo rodando em http://localhost:${port}`);
});
