import mongoose from 'mongoose'

const Schema = new mongoose.Schema(
  {
    capsule_serial: {
      type: String,
      required: true,
      index: true
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
      type: String,
      index: true
    },
    details: {
      type: String,
      index: true
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

Schema.index({ details: 'text', type: 'text' })

export default mongoose.model('Capsule', Schema)
