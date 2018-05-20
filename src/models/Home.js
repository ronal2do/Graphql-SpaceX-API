import mongoose from 'mongoose'

const Schema = new mongoose.Schema(
  {
    project_name: {
      type: String
    },
    version: {
      type: String
    },
    project_link: {
      type: String
    },
    organization: {
      type: String
    },
    organization_link: {
      type: String
    },
    description: {
      type: String
    }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    },
    collection: 'home'
  }
)

export default mongoose.model('Home', Schema)
