import { config } from "dotenv";
config();
import Database from "./core/database";
import {checkEnvVariables} from "@talenthub/services/shared-library/service-common/dist/utils";
import Server from "./app/express";
const expessServer = new Server();




const databaseUrl = process.env.DATABASE_URL;








const PORT = process.env.PORT || 3001;

expessServer.start(PORT);




