module.exports = (req, res) => {
  const message = 'bar';
  res.status(200).send(message);
};
