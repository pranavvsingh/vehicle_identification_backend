exports.getErrorMsg = (errorCode) => {
  switch (errorCode) {
    case 400:
      return "Invalid Request";
    case 500:
      return "Server Error";
    case 401:
      return "Permission Denied";
    default:
      break;
  }
};
