import mongoose from 'mongoose'

const Schema = new mongoose.Schema(
  {
    id: {
      type: String
    },
    full_name: {
      type: String
    },
    status: {
      type: String
    },
    location: {
      name: {
        type: String
      },
      region: {
        type: String
      },
      latitude: {
        type: String
      },
      longitude: {
        type: String
      }
    },
    vehicles_launched: {
      type: [String]
    },
    details: {
      type: String
    }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    },
    collection: 'launchpad'
  }
)

export default mongoose.model('Launchpad', Schema)
