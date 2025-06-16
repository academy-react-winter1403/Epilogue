const generateInvoiceNumber = () => {
  const timestamp = Date.now(); // 13 رقم
  const randomNum = Math.floor(1000 + Math.random() * 9000); // 4 رقم
  return `${timestamp}${randomNum}`; // مجموعا 17 رقم
};

export default generateInvoiceNumber;
