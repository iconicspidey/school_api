const phoneVal = (phone) => {
  const phoneVal = /^(\+234|0)?[789]\d{9}$/;
  return phoneVal.test(phone);
};
module.exports = phoneVal;
