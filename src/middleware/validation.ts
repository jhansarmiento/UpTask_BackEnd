import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'

/* Middleware to handle input errors */
export const handleInputErrors = (req: Request, res: Response, next: NextFunction): Promise<void>=> {
    /* Get the validation errors */
    let errors = validationResult(req)
    /* If there are errors, return a 400 status code with the errors */
    if(!errors.isEmpty()) {
        res.status(400).json({errors: errors.array()})
        return
    }
    next()
    return
}