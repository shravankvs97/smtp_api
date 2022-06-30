import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import SmtpRoute from '../src/routes/smtp.route';
import unknownRoutesMiddleware from '../src/middlewares/unknownroutes.middleware';
import errorMiddleware from '../src/middlewares/error.middleware';

class App {
  public app: express.Application;
  public port: string | number;

  constructor() {
    this.app = express();
    this.port = 7000;

    this.initializeMiddleware();
    this.initializeRoutes();
    this.initializeErrorHandling();
  }
  public listen() {
    this.app.listen(this.port, () => {
      console.log('App is running');
    });
  }
  private initializeMiddleware() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes() {
    this.app.get('/', (req, res) => {
      res.send('Hello Geeks, I am running');
    });
    this.app.use('/', new SmtpRoute().router);
  }

  private initializeErrorHandling() {
    this.app.use(unknownRoutesMiddleware);
    this.app.use(errorMiddleware);
  }
}

export default App;
