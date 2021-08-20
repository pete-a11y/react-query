const parseToBooleanFromString = string => {
  if (string === 'true') return true;
  if (string === 'false') return false;
  return string;
};

module.exports = { parseToBooleanFromString };
