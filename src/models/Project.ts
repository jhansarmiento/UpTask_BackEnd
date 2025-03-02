import mongoose, { Schema, Document } from 'mongoose'

export type ProjectType = Document & {
    /* Define the types for the Project */
    projectName: string
    clientName: string
    description: string
}

const ProjectSchema : Schema = new Schema({
    /* Define the schema for the Project */
    projectName: {
        type: String,
        required: true,
        trim: true
    },
    clientName: {
        type: String,
        required: true,
        trim: true
    },
    description: { 
        type: String,
        required: true,
        trim: true
    }
})

/* Create a model for the Project */
const Project = mongoose.model<ProjectType>('Project', ProjectSchema) /* 'Project' is the name of the collection in the database */

export default Project