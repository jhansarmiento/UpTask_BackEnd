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
        try {
            const projects = await Project.find({}) /* Get all projects from the database */
            res.json(projects)
        } catch (error) {
            console.error(error)   
        }
    }

    static getProjectById = async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            const project = await Project.findById(id) /* Get project by ID */

            /* If project is not found, return 404 */
            if (!project) { 
                const error = new Error('Project not found')
                res.status(404).json({error: error.message})
                return
            }
            /* If project is found, return the project */
            res.json(project)
            return
        } catch (error) {
            console.error(error)
        }
    }

    static updateProject = async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            const project = await Project.findByIdAndUpdate(id, req.body) /* Find project by ID and update */

            if (!project) { 
                const error = new Error('Project not found')
                res.status(404).json({error: error.message})
                return
            }

            await project.save() /* Save the updated project */
            res.send('Project updated')
            
        } catch (error) {
            console.error(error)
        }
    }

    static deleteProject = async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            const project = await Project.findById(id) /* Find project by ID and delete */

            if (!project) { 
                const error = new Error('Project not found')
                res.status(404).json({error: error.message})
                return
            }

            await project.deleteOne() /* Deletes the project */
            res.send('Project deleted')
        } catch (error) {
            console.error(error)
        }
    }
}