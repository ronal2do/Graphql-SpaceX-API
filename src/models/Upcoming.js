import mongoose from 'mongoose'

const Schema = new mongoose.Schema(
  {
    flight_number: {
      type: Number
    },
    mission_name: {
      type: String
    },
    launch_year: {
      type: String
    },
    launch_date_unix: {
      type: Number
    },
    launch_date_utc: {
      type: String
    },
    launch_date_local: {
      type: String
    },
    rocket: {
      rocket_id: { type: String },
      rocket_name: { type: String },
      rocket_type: { type: String },
      first_stage: {
        cores: [
          {
            core_serial: { type: String },
            flight: { type: Number },
            block: { type: Number },
            reused: { type: Boolean },
            land_success: { type: String },
            landing_type: { type: String },
            landing_vehicle: { type: String }
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: { type: String },
            reused: { type: Boolean },
            customers: { type: [String] },
            payload_type: { type: String },
            payload_mass_kg: { type: Number },
            payload_mass_lbs: { type: String },
            orbit: { type: String }
          }
        ]
      }
    },

    telemetry: {
      flight_club: { type: String }
    },
    reuse: {
      core: { type: Boolean },
      side_core1: { type: Boolean },
      side_core2: { type: Boolean },
      fairings: { type: Boolean },
      capsule: { type: Boolean }
    },
    launch_site: {
      site_id: { type: String },
      site_name: { type: String },
      site_name_long: { type: String }
    },
    launch_success: {
      type: String
    },
    links: {
      mission_patch: {
        type: String
      },
      mission_patch_small: {
        type: String
      },
      reddit_campaign: {
        type: String
      },
      reddit_launch: {
        type: String
      },
      reddit_recovery: {
        type: String
      },
      reddit_media: {
        type: String
      },
      presskit: {
        type: String
      },
      article_link: {
        type: String
      },
      video_link: {
        type: String
      }
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
    collection: 'upcoming_v2'
  }
)

export default mongoose.model('Upcoming', Schema)
