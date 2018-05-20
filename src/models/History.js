import mongoose from 'mongoose'

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    event_date_utc: {
      type: String
    },
    flight_number: {
      type: String,
      index: true
    },
    details: {
      type: String,
      default: true
    },
    links: {
      reddit: {
        type: String
      },
      spaceflightnow: {
        type: String
      },
      wikipedia: {
        type: String
      }
    }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    },
    collection: 'history'
  }
)

export default mongoose.model('History', Schema)
