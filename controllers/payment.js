import { paymentService } from "../service/authService";

export function setPayment(req, res, next) {
  try {
    paymentService.setPayment(req, res);
  } catch (error) {
    next(error);
  }
}

export function getPayment(req, res, next) {
  try {
    paymentService.getPayment(req, res);
  } catch (error) {
    next(error);
  }
}
