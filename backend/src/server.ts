import app from "./app.js";
import sequelize from "./config/db.config.js";

const PORT = 5000;

export async function startServer() {
  try {
    sequelize.authenticate();
    console.log("db runs");

    app.listen(PORT, () => {
      console.log(`app started, listening on port ${PORT}`);
    });
  } catch (error) {
      console.error("could not connect db/start server", error)
      process.exit(1)
  }
}
