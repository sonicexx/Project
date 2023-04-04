import { config } from './config';

import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
  organization: config.ORG,
  apiKey: config.KEY,
});
const openai = new OpenAIApi(configuration);
export default openai;
