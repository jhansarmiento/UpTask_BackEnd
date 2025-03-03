import type { Request, Response }from 'express'
import Project from '../models/Project'

export class ProjectController {
    
    static createProject = async (req: Request, res: Response) => {
        
        const project = new Project(req.body) /* Create a new project instance */

        try {
            await project.save() /* Save the project to the database */
            res.send('Project created')
        } catch (error) {
            console.error(error)
        }
    }

    static getAllProjects = async (req: Request, res: Response) => {
        res.send('All projects')
    }
}