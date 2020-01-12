const getTextBlock = (msg, type = 'mrkdwn') => ({ type, text: msg });

module.exports = (req, res) => {
  const msg = 'BAR';
  const obj = {};
  obj.blocks = [];
  obj.blocks.push({ type: 'section', text: getTextBlock(msg) });
  res.status(200).send(JSON.stringify(obj));
};
