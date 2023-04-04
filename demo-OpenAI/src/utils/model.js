import { config } from './config';
import openai from './http';
class Model {
  constructor(model) {
    this.model = model || 'gpt-3.5-turbo';
  }
  sentChat({ msg, context }) {
    const contextList = JSON.parse(
      localStorage.getItem('openai-context-list') || '[]'
    );
    const currentMsg = JSON.parse(localStorage.getItem(context) || '[]');

    currentMsg.push({ role: 'user', content: msg });

    return new Promise(async (resolve, reject) => {
      try {
        const { data, status } = await openai.createChatCompletion({
          model: this.model,
          messages: currentMsg,
        });
        currentMsg.push(data.choices[0].message);

        localStorage.setItem(context, JSON.stringify(currentMsg));
        resolve({
          status,
          message: data.choices[0].message.content,
          created: data.created * 1000,
        });
      } catch (err) {
        resolve({
          status: 0,
          message: '请求失败',
          created: new Date().getTime(),
        });
      }
    });
  }
}

export default Model;
