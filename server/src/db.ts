import { ConnectOptions, connect } from "mongoose";
import config from "./config";

(async () => {
  try {
    const db = await connect(
      `mongodb://${config.MONGODB_HOST}/${config.MONGODB_DATABASE_NAME}`
    );
    console.log("Database is connected to:", db.connection.name);
  } catch (e) {
    console.error(e);
  }
})();
