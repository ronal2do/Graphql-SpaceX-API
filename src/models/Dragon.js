import mongoose from 'mongoose'

const Schema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String
    },
    active: {
      type: Boolean
    },
    crew_capacity: {
      type: Number
    },
    sidewall_angle_deg: {
      type: Number
    },
    orbit_duration_yr: {
      type: Number
    },
    heat_shield: {
      material: {
        type: String
      },
      size_meters: {
        type: Number
      },
      temp_degrees: {
        type: Number
      },
      dev_partner: {
        type: String
      }
    },
    thrusters: [
      {
        type: {
          type: String
        },
        amount: {
          type: Number
        },
        pods: {
          type: Number
        },
        fuel_1: {
          type: String
        },
        fuel_2: {
          type: String
        },
        thrust: {
          kN: {
            type: Number
          },
          lbf: {
            type: Number
          }
        }
      }
    ],
    launch_payload_mass: {
      kg: {
        type: Number
      },
      lb: {
        type: Number
      }
    },
    launch_payload_vol: {
      cubic_meters: {
        type: Number
      },
      cubic_feet: {
        type: Number
      }
    },
    return_payload_mass: {
      kg: {
        type: Number
      },
      lb: {
        type: Number
      }
    },
    return_payload_vol: {
      cubic_meters: {
        type: Number
      },
      cubic_feet: {
        type: Number
      }
    },
    pressurized_capsule: {
      payload_volume: {
        cubic_meters: {
          type: Number
        },
        cubic_feet: {
          type: Number
        }
      }
    },
    trunk: {
      trunk_volume: {
        cubic_meters: {
          type: Number
        },
        cubic_feet: {
          type: Number
        }
      },
      cargo: {
        solar_array: {
          type: Number
        },
        unpressurized_cargo: {
          type: Boolean
        }
      }
    },
    height_w_trunk: {
      meters: {
        type: Number
      },
      feet: {
        type: Number
      }
    },
    diameter: {
      meters: {
        type: Number
      },
      feet: {
        type: Number
      }
    }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    },
    collection: 'dragon'
  }
)

export default mongoose.model('Dragon', Schema)
