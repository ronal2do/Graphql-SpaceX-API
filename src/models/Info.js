import mongoose from 'mongoose'

const Schema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    founder: {
      type: String
    },
    founded: {
      type: Number
    },
    employees: {
      type: Number
    },
    vehicles: {
      type: Number
    },
    launch_sites: {
      type: Number
    },
    test_sites: {
      type: Number
    },
    ceo: {
      type: String
    },
    cto: {
      type: String
    },
    coo: {
      type: String
    },
    cto_propulsion: {
      type: String
    },
    valuation: {
      type: Number
    },
    headquarters: {
      address: {
        type: String
      },
      city: {
        type: String
      },
      state: {
        type: String
      }
    },
    summary: {
      type: String
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    },
    collection: 'info'
  }
)

export default mongoose.model('Info', Schema)


// type Info {
//   name: String
//   founder: String
//   founded: Int
//   employees: Int
//   vehicles: Int
//   launch_sites: Int
//   test_sites: Int
//   ceo: String
//   cto: String
//   coo: String
//   cto_propulsion: String
//   valuation: Int

// }
