import { body } from 'express-validator'

const user = body('user', 'must be a valid name.')
    .trim()
    .notEmpty()
    .withMessage('Name cannot be empty.')
    .isLength({ max: 32 })
    .withMessage('Username can not be more than 32 characters.')
    .escape()

const mess = body('mess', 'must be a valid message.')
    .trim()
    .notEmpty()
    .withMessage('Message cannot be empty.')
    .escape()

export {
    user,
    mess
}