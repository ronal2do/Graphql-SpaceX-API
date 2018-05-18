import mongoose from 'mongoose'

const Schema = new mongoose.Schema(
  {
    capsule_serial: {
      type: String,
      required: true
    },
    capsule_id: {
      type: String
    },
    status: {
      type: String,
      index: true
    },
    original_launch: {
      type: String,
      default: true
    },
    type: {
      type: String
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
    collection: 'capsule'
  }
)

export default mongoose.model('Capsule', Schema)
