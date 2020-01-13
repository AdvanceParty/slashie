require('dotenv').config();

const { WebClient } = require('@slack/web-api');
const slack = new WebClient(process.env.AU_COM_ADVANCEPARTY_SLASHIE_TOKEN);
const currentTime = new Date().toTimeString();

const getUsernameFromText = str => str1.match(/\@\w{0,}/);

/**
 * Wrappers for Slack API methods.
 * Each of these returns a promise which can be resolved within an async function
 **/

const getAuth = slackClient => slackClient.auth.test(); // returns a promise
const postMessage = (slackClient, message) =>
  slackClient.chat.postMessage(message);

/**********************************/

// const getTextBlock = (msg, type = 'mrkdwn') => ({ type, text: msg });
const getSenderId = body => body.user_id;
const getRecipientName = body => getUsernameFromText(body.text);

module.exports = async (req, res) => {
  let result, error;

  try {
    // const auth = await getAuth(slack);
    // console.log(auth);
    const { body } = req;
    const imObject = await slack.im.open({ user: 'UGPDW4N4E' });
    const channel = imObject.channel.id;
    // const fromName = body.user_name;
    // const recipientName = getUsernameFromText(body.text);
    console.log(`Channel: ${channel}`);
    const msg = {
      channel,
      text: 'FooBAR!'
    };
    result = await slack.chat.postMessage();
  } catch (e) {
    error = e.message;
  }

  // const msgObj = {
  //   channel: userId,
  //   text: `The current time is ${currentTime}`
  // };

  // const body = parse(await text(req));
  // console.log(req.body);

  // const result = { body, query, text: 'HELLO' };
  // console.log(auth);

  res.status(200).send(JSON.stringify({ result, error }));

  // obj.blocks.push({ type: 'section', text: getTextBlock(msg) });
};
