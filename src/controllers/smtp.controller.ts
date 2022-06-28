import { HTTPException } from '../exceptions';
import { NextFunction, Request, Response } from 'express';
import SmtpService from '../services/smtp.service';

class SmtpController {
  private smptService = new SmtpService();

  public async getConfig(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const obj = await this.smptService.getConfig();

      if (!obj) {
        throw new HTTPException(
          404,
          'Ex00.1.404',
          'Smtp Config not found',
        );
      }
      res.status(200).json({ data: obj });
    } catch (error) {
      next(error);
    }
  }
  public async addConfig(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const smtpConfig = req.body;
      const newConfig = await this.smptService.addConfig(
        smtpConfig,
      );
      res
        .status(200)
        .json({ message: 'sucess posted config' });
    } catch (error) {
      next(error);
    }
  }

  public async testConfig(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const smtpConfig = req.body;
      const newConfig = await this.smptService.testConfig(
        smtpConfig,
      );
      res
        .status(200)
        .json({
          isPassed: true,
          message: 'Smtp config passed test',
        });
    } catch (error) {
      next(error);
    }
  }
}

export default SmtpController;
