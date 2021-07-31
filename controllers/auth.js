import { authService } from "../service/authService";

export function register(req, res, next) {
  try {
    authService.register(req, res);
  } catch (error) {
    next(error);
  }
}

export function login() {
  try {
    authService.login(req, res);
  } catch (error) {
    next(error);
  }
}

export function getUser() {
  try {
    authService.getUser(req, res);
  } catch (error) {
    next(error);
  }
}
