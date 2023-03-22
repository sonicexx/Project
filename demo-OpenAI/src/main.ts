// import axios from 'axios';

// axios({
//   method: 'post',
//   maxBodyLength: Infinity,
//   url: 'api/v1/chat/completions',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   data: JSON.stringify({
//     apiKey: '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', // openai 网站上的 personal api key
//     sessionId: 'nice', // 后端会根据这个 id 进行上下文分析，最好使用 crypto.randomUUID()
//     content: '你好',
//   }),
// }).then(({ data }) => {
//   console.log(data);
// });
