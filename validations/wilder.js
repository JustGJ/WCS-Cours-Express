import { check, validationResult } from 'express-validator';

export const create = [
    // value | msg
    check('name', 'Le nom doit avoir au moins 4 caractères').isLength({ min: 4 }),
    check('city', 'La ville doit avoir au moins 2 caractères').isLength({ min: 2 }),
    (req, res, next) => {
        const errorsValidation = validationResult(req);
        if (!errorsValidation.isEmpty()) {
            let errors = {};
            errorsValidation.errors.map((err) => {
                [(errors = { ...errors, [err.param]: err.msg })];
            });
            res.json({
                success: false,
                result: errors,
            });
        } else {
            next();
        }
    },
];
