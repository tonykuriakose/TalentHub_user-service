import { config } from "dotenv";

config();

import Server from "./app/express";

const expessServer = new Server();

const PORT = process.env.PORT || 3001;

expessServer.start(PORT);




