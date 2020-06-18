import logsModel from '../../db/models/logs.model';

// function to add logs to the logs table
const createLog = async (description: string, location: string) => {
  await logsModel.create({
    description,
    location,
  });
};

export default createLog;
