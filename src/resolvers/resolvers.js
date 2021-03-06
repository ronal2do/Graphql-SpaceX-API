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
} from '../models'

export default {
  Query: {
    allCapsules: async (_, args) => {
      try {
        const where = args.filter
          ? {
            $text: { $search: args.filter }
          }
          : {}

        return await Capsule.find(where, {
          score: { $meta: 'textScore' }
        }).sort({
          score: { $meta: 'textScore' }
        })
      } catch (err) {
        throw new Error(err)
      }
    },
    allCores: async () => {
      try {
        const res = await Core.find({})
        return res
      } catch (err) {
        throw new Error(err)
      }
    },
    allDragons: async () => {
      try {
        const res = await Dragon.find({})
        return res
      } catch (err) {
        throw new Error(err)
      }
    },
    allHistories: async () => {
      try {
        const res = await History.find({})
        return res
      } catch (err) {
        throw new Error(err)
      }
    },
    allHomes: async () => {
      try {
        const res = await Home.find({})
        return res
      } catch (err) {
        throw new Error(err)
      }
    },
    allInfos: async () => {
      try {
        const res = await Info.find({})
        return res
      } catch (err) {
        throw new Error(err)
      }
    },
    // Launch: async () => {
    //   try {
    //     const res = await Launch.find({})
    //     return res
    //   } catch (err) {
    //     throw new Error(err)
    //   }
    // },
    allLaunchpads: async () => {
      try {
        const res = await Launchpad.find({})
        return res
      } catch (err) {
        throw new Error(err)
      }
    },
    // Rocket: async () => {
    //   try {
    //     const res = await Rocket.find({})
    //     return res
    //   } catch (err) {
    //     throw new Error(err)
    //   }
    // },
    allUpcomings: async () => {
      try {
        const res = await Upcoming.find({})
        return res
      } catch (err) {
        throw new Error(err)
      }
    }
  }
}
