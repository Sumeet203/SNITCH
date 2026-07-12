import { body, validationResult } from "express-validator";

function validateRequest(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

export default validateRegisterUser = [
  body("email").isEmail().withMessage("Please provide a valid email address"),
  body("contact")
    .notEmpty()
    .withMessage("Contact is required")
    .matches(/^[0-9]{10}$/)
    .withMessage("Contact must be a valid 10-digit number"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("fullname")
    .notEmpty()
    .withMessage("Fullname is required")
    .length({ min: 3 })
    .withMessage("Fullname must be at least 3 characters long"),
  body("isSeller").isBoolean().withMessage("isSeller must be boolean value"),
  validateRequest,
];
