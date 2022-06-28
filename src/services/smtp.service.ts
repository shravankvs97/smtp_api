import BadRequestException from '../exceptions/http/badRequest.exception';

class SmtpService {
  public async getConfig(): Promise<any> {
    return {
      host: '192.11.11.125',
      port: 345,
      authemail: 'abc@gmail.com',
      authpassword: 'Addtexthere',
      connectionURL: 'abc@gmail.com',
    };
  }

  public async addConfig(smtpConfig: any): Promise<any> {
    if (Object.keys(smtpConfig).length === 0) {
      throw new BadRequestException(
        '101',
        'Smtp Config is required',
      );
    }
    return true;
  }

  public async testConfig(smtpConfig: any): Promise<any> {
    console.log(smtpConfig, 'test');
    if (Object.keys(smtpConfig).length === 0) {
      throw new BadRequestException(
        '101',
        'Smtp Config is required',
      );
    }
    return true;
  }
}

export default SmtpService;
