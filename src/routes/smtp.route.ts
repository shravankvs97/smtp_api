import {
  NextFunction,
  Request,
  Response,
  Router,
} from 'express';
import SmtpController from '../controllers/smtp.controller';

class SmtpRoute {
  private basePath = '/smtp';
  public router: Router = Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    const smtpController = new SmtpController();
    this.router.get(
      `${this.basePath}/config`,
      (req: Request, res: Response, next: NextFunction) => {
        smtpController.getConfig(req, res, next);
      },
    );
    this.router.post(
      `${this.basePath}/config`,
      (req: Request, res: Response, next: NextFunction) => {
        smtpController.addConfig(req, res, next);
      },
    );

    this.router.post(
      `${this.basePath}/config/test`,
      (req: Request, res: Response, next: NextFunction) => {
        smtpController.testConfig(req, res, next);
      },
    );
  }
}

export default SmtpRoute;
