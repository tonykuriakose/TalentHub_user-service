import mongoose from "mongoose";

class Database {
  private dbUrl: string;

  constructor(dbUrl: string) {
    this.dbUrl = dbUrl;
  }
  async connect(): Promise<void> {
    try {
      await mongoose.connect(this.dbUrl, { dbName: "user-service" });
      console.log("DB Connected");
    } catch (error) {}
  }

  async disconnect(): Promise<void> {
    try {
      await mongoose.disconnect();
      console.log("DB Connected");
    } catch (error) {}
  }
}

export default Database;
