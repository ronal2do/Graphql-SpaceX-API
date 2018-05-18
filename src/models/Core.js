import mongoose from 'mongoose'

const Schema = new mongoose.Schema(
  {
    core_serial: {
      type: String,
      required: true
    },
    block: {
      type: Number
    },
    status: {
      type: String,
      index: true
    },
    original_launch: {
      type: String,
      default: true
    },
    missions: {
      type: [String],
      default: true
    },
    rtls_attempt: {
      type: Boolean
    },
    rtls_landings: {
      type: Number
    },
    asds_attempt: {
      type: Boolean
    },
    asds_landings: {
      type: Number
    },
    water_landing: {
      type: Boolean
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
    collection: 'core'
  }
)

export default mongoose.model('Core', Schema)
