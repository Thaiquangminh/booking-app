const shortenText = (text, maxlength = 50) => {
  const lastChar = text.length > maxlength ? '...' : '';
  return `${text.substring(0, maxlength)} ${lastChar}`;
};

export default shortenText;
