exports.getErrorMsg = (errorCode) => {
  switch (errorCode) {
    case 400:
      return "Invalid Request";
    case 500:
      return "Server Error";
    case 401:
      return "Permission Denied";
    case 409:
      return "User already exist";
    case 422:
      return "Unprocessable Entity";
    case 403:
      return "Invalid Username or Password";
    case 404:
      return "User does not exist";
    default:
      return "Something went wrong";
  }
};
