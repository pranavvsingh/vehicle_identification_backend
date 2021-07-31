import { reportService } from "../services/reportService";

export function autoCheck(req, res, next) {
  try {
    reportService.autoCheck(req, res);
  } catch (error) {
    next(error);
  }
}

export function checkAutoCheck(req, res, next) {
  try {
    reportService.checkAutoCheck(req, res);
  } catch (error) {
    next(error);
  }
}

export function carafax(req, res, next) {
  try {
    reportService.carafax(req, res);
  } catch (error) {
    next(error);
  }
}

export function checkCarafax(req, res, next) {
  try {
    reportService.checkCarafax(req, res);
  } catch (error) {
    next(error);
  }
}

export function image(req, res, next) {
  try {
    reportService.image(req, res);
  } catch (error) {
    next(error);
  }
}

export function checkImage(req, res, next) {
  try {
    reportService.checkImage(req, res);
  } catch (error) {
    next(error);
  }
}

export function checkBalance(req, res, next) {
  try {
    reportService.checkBalance(req, res);
  } catch (error) {
    next(error);
  }
}
