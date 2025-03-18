import express, { Application } from 'express';

class Server {
    public app: Application;
    private server: any;

    constructor() {
        this.app = express();
    }


    start(PORT: string) {
        this.server = this.app.listen(PORT, () => {
            console.log("Server running");
            ;
        });
    }
}

export default Server;