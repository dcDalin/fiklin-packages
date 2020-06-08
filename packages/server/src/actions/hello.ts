import { Request, Response } from 'express';

const hello = async (req: Request, res: Response) => {
  const message = res.json({
    message: 'Hello from custom action',
  });

  return message;
};

export default hello;
