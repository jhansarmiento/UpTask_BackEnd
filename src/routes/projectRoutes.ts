import { Router } from 'express'
import { body } from 'express-validator'
import { ProjectController } from '../controllers/ProjectController'
import  { handleInputErrors }  from '../middleware/validation'


const router = Router()

router.post('/', 
    /* Validate input */
    body('projectName')
        .notEmpty().withMessage('Project name is required'),
    body('clientName')
        .notEmpty().withMessage('Client name is required'),
    body('description')
        .notEmpty().withMessage('Description is required'),
    /* Handle input errors */
    handleInputErrors,
    /* Create a new project */
    ProjectController.createProject
)
router.get('/', ProjectController.getAllProjects)

export default router