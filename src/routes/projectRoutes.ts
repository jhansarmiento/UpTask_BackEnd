import { Router } from 'express'
import { body, param } from 'express-validator'
import { ProjectController } from '../controllers/ProjectController'
import  { handleInputErrors }  from '../middleware/validation'

const router = Router()

/* Routes */

/* Create a new project */
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

/* Get all projects */
router.get('/', ProjectController.getAllProjects)

/* Get project by ID */
router.get('/:id', 
    param('id')
        .isMongoId().withMessage('Invalid project ID'),
    handleInputErrors,
    ProjectController.getProjectById
)

/* Update project */
router.put('/:id', 
    param('id')
        .isMongoId().withMessage('Invalid project ID'),
    body('projectName')
        .notEmpty().withMessage('Project name is required'),
    body('clientName')
        .notEmpty().withMessage('Client name is required'),
    body('description')
        .notEmpty().withMessage('Description is required'),
    handleInputErrors,
    ProjectController.updateProject
)

router.delete('/:id', 
    param('id')
        .isMongoId().withMessage('Invalid project ID'),
    handleInputErrors,
    ProjectController.deleteProject
)

export default router