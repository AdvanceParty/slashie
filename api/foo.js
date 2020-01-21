require('dotenv').config();

const { WebClient } = require('@slack/web-api');
const slack = new WebClient(process.env.AU_COM_ADVANCEPARTY_SLASHIE_TOKEN);

module.exports = async (req, res) => {
  let result, error;
  const { body } = req;

  // try {
  //   result = await slack.chat.postMessage();
  // } catch (e) {
  //   error = e.message;
  // }

  // const msgObj = {
  //   channel: userId,
  //   text: `The current time is ${currentTime}`
  // };

  // const result = { body, query, text: 'HELLO' };
  // console.log(auth);

  res.status(200).send(body);

  // obj.blocks.push({ type: 'section', text: getTextBlock(msg) });
};
