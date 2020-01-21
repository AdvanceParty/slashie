const { WebClient } = require('@slack/web-api');
const token = process.env.AU_COM_ADVANCEPARTY_SLASHIE_TOKEN;
const web = new WebClient(token);

const MESSAGES = {
  NO_REQUEST: 'You need to ask me to do something.',
  REQUEST_NOT_RECOGNISED: "I don't know how to do that."
};

module.exports = (req, res) => {
  const { body } = req;
  const replyMessage = body ? body : MESSAGES.NO_REQUEST;
  res.status(200).send(replyMessage);
};
