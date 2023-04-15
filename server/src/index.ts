import app from "./app";
import "./db";

(async () => {
  await app.listen(app.get("port"));
  console.log("Server on port", app.get("port"));
})();
