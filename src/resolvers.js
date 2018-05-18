import {
  Capsule,
  Core,
  Dragon,
  History,
  Home,
  Info,
  Launch,
  Launchpad,
  Rocket,
  Upcoming
} from './models'

export default {
  Query: {
    allCapsules: async () => {
      try {
        // Use lean because we don't need the mongoose object returned
        const res = await Capsule.find({})
        return res
      } catch (err) {
        throw new Error(err)
      }
    },
    allCores: async () => {
      try {
        // Use lean because we don't need the mongoose object returned
        const res = await Core.find({})
        return res
      } catch (err) {
        throw new Error(err)
      }
    },
    allDragons: async () => {
      try {
        // Use lean because we don't need the mongoose object returned
        const res = await Dragon.find({})
        return res
      } catch (err) {
        throw new Error(err)
      }
    }
    // History: async () => {
    //   try {
    //     // Use lean because we don't need the mongoose object returned
    //     const res = await History.find({})
    //     return res
    //   } catch (err) {
    //     throw new Error(err)
    //   }
    // },
    // Home: async () => {
    //   try {
    //     // Use lean because we don't need the mongoose object returned
    //     const res = await Home.find({})
    //     return res
    //   } catch (err) {
    //     throw new Error(err)
    //   }
    // },
    // Info: async () => {
    //   try {
    //     // Use lean because we don't need the mongoose object returned
    //     const res = await Info.find({})
    //     return res
    //   } catch (err) {
    //     throw new Error(err)
    //   }
    // },
    // Launch: async () => {
    //   try {
    //     // Use lean because we don't need the mongoose object returned
    //     const res = await Launch.find({})
    //     return res
    //   } catch (err) {
    //     throw new Error(err)
    //   }
    // },
    // Launchpad: async () => {
    //   try {
    //     // Use lean because we don't need the mongoose object returned
    //     const res = await Launchpad.find({})
    //     return res
    //   } catch (err) {
    //     throw new Error(err)
    //   }
    // },
    // Rocket: async () => {
    //   try {
    //     // Use lean because we don't need the mongoose object returned
    //     const res = await Rocket.find({})
    //     return res
    //   } catch (err) {
    //     throw new Error(err)
    //   }
    // },
    // Upcoming: async () => {
    //   try {
    //     // Use lean because we don't need the mongoose object returned
    //     const res = await Upcoming.find({})
    //     return res
    //   } catch (err) {
    //     throw new Error(err)
    //   }
    // }
  }
}
