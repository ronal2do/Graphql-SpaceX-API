import mongoose from 'mongoose'

const Schema = new mongoose.Schema(
  {
    project_name: {
      type: String,
      required: true
    },
    version: {
      type: String
    },
    project_link: {
      type: String,
      index: true
    },
    organization: {
      type: String,
      default: true
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
