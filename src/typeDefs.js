export const typeDefs = `
  type Capsule {
    _id: String!
    capsule_serial: String!
    capsule_id: String!
    status: String!
    original_launch: String!
    type: String
    details: String
  }
  type Core {
    _id: String!
    core_serial: String 
    block: Int
    status: String 
    original_launch: String 
    missions: [String] 
    rtls_attempt: Boolean 
    rtls_landings: Int
    asds_attempt: Boolean 
    asds_landings: Int
    water_landing: Boolean 
    details: String
  }
   type Dragon { 
     _id: String!
     id: String
     name: String
     type: String
     active: Boolean 
     crew_capacity: Int
     sidewall_angle_deg: Int
     orbit_duration_yr: Int
     heat_shield: Heat_shield
     thrusters: [Thrusters]
     launch_payload_mass: Launch_payload_mass
     launch_payload_vol: Launch_payload_vol
     return_payload_mass: Return_payload_mass
     return_payload_vol: Return_payload_vol
     pressurized_capsule: Pressurized_capsule
     trunk: Trunk
     height_w_trunk: Height_w_trunk
     diameter: Diamenter
   }
    type Launch_payload_mass {
        kg: Int
        lb: Int
    } 
    type Launch_payload_vol {
        cubic_meters: Int
        cubic_feet: Int
    } 
    type Return_payload_mass {
        kg: Int
        lb: Int
    } 
    type Return_payload_vol {
        cubic_meters: Int
        cubic_feet: Int
    } 
    type Pressurized_capsule {
        payload_volume: Payload_volume
    } 
    type Payload_volume {
        cubic_meters: Int
        cubic_feet: Int
    }
   type Trunk {
        trunk_volume: trunk_volume
        cargo: cargo
    } 
    type trunk_volume {
        cubic_meters: Int
        cubic_feet: Int
    } 
    type cargo {
        solar_array: Int
        unpressurized_cargo: Boolean
    }
   type Height_w_trunk {
        meters: Float 
        feet: Float
    } 
   type Diamenter {
        meters: Float 
        feet: Int
    }
    type Heat_shield {
        material: String
        size_meters: Float 
        temp_degrees: Int
        dev_partner: String
    }
    type Thrusters {
        type: String
        amount: Int
        pods: Int
        fuel_1: String
        fuel_2: String
        thrust: Thrust
    } 
    type Thrust {
        kN: Float
        lbf: Int
    }
   
  #  type History {
  #    _id: String!
  #    title: String
  #    event_date_utc: String
  #    flight_number:String
  #    details: String
  #    links {
  #        reddit: String
  #        spaceflightnow: String
  #        wikipedia: String
  #    }
  #  }
  # type Home {
  #   _id: String!
  #   project_name: String
  #   version: String
  #   project_link: String
  #   organization: String
  #   organization_link: String
  #   description: String
  # }
  # type Info {
  #   _id: String!
  #   name: String
  #   founder: String
  #   founded: Int
  #   employees: Int
  #   vehicles: Int
  #   launch_sites: Int
  #   test_sites: Int
  #   ceo: String
  #   cto: String
  #   coo: String
  #   cto_propulsion: String
  #   valuation: Int
  #   headquarters {
  #       address: String
  #       city: String
  #       state: String
  #   }
  #   summary: String
  # }
  # type Launch {
  #   _id: String!
  #   flight_number: Int
  #   mission_name: String
  #   launch_year: String
  #   launch_date_unix: Int
  #   launch_date_utc: String
  #   launch_date_local: String
  #   rocket {
  #       rocket_id: String
  #       rocket_name: String
  #       rocket_type: String
  #       first_stage {
  #           cores: [
  #               {
  #                   core_serial: String
  #                   flight: Int
  #                   block: String
  #                   reused: Boolean, 
  #                   land_success: Boolean, 
  #                   landing_type: String
  #                   landing_vehicle: String
  #               }
  #           ]
  #       }
  #       second_stage {
  #           payloads: [
  #               {
  #                   payload_id: String
  #                   reused: Boolean, 
  #                   customers: [
  #                       String
  #                   ], 
  #                   payload_type: String
  #                   payload_mass_kg: Float
  #                   payload_mass_lbs: Float
  #                   orbit: String
  #               }
  #           ]
  #       }
  #   }
  #   telemetry {
  #       flight_club: String
  #   }
  #   reuse {
  #       core: Boolean, 
  #       side_core1: Boolean, 
  #       side_core2: Boolean, 
  #       fairings: Boolean, 
  #       capsule: Boolean
  #   }
  #   launch_site {
  #       site_id: String
  #       site_name: String
  #       site_name_long: String
  #   }
  #   launch_success: Boolean, 
  #   links {
  #       mission_patch: String
  #       mission_patch_small: String
  #       article_link: String
  #       video_link: String
  #   }
  #   details: String
  # }
  # type Launchpad {
  #   _id: String!
  #   id: String
  #   full_name: String
  #   status: String
  #   location {
  #       name: String
  #       region: String
  #       latitude: String
  #       longitude: String
  #   }
  #   vehicles_launched: [
  #       String
  #   ], 
  #   details: String
  # }
  # type Rocket {
  #   _id: String!
  #   id: String
  #   name: String
  #   type: String
  #   active: Boolean, 
  #   stages: Int
  #   boosters: Int
  #   cost_per_launch: Int
  #   success_rate_pct: Int
  #   first_flight: String
  #   country: String
  #   company: String
  #   height {
  #       meters: Float
  #       feet: Int
  #   }
  #   diameter {
  #       meters: Float
  #       feet: Float
  #   }
  #   mass {
  #       kg: Int
  #       lb: Int
  #   }
  #   payload_weights: [
  #       {
  #           id: String
  #           name: String
  #           kg: Int
  #           lb: Int
  #       }
  #   ], 
  #   first_stage {
  #       reusable: Boolean, 
  #       engines: Int
  #       fuel_amount_tons: Float
  #       burn_time_sec: Int
  #       thrust_sea_level {
  #           kN: Int
  #           lbf: Int
  #       }
  #       thrust_vacuum {
  #           kN: Int
  #           lbf: Int
  #       }
  #   }
  #   second_stage {
  #       engines: Int
  #       fuel_amount_tons: Float
  #       burn_time_sec: Int
  #       thrust {
  #           kN: Int
  #           lbf: Int
  #       }
  #       payloads {
  #           option_1: String
  #           composite_fairing {
  #               height {
  #                   meters: Float
  #                   feet: Float
  #               }
  #               diameter {
  #                   meters: Float
  #                   feet: Float
  #               }
  #           }
  #       }
  #   }
  #   engines {
  #       number: Int
  #       type: String
  #       version: String
  #       layout: String
  #       engine_loss_max: Int
  #       propellant_1: String
  #       propellant_2: String
  #       thrust_sea_level {
  #           kN: Int
  #           lbf: Int
  #       }
  #       thrust_vacuum {
  #           kN: Int
  #           lbf: Int
  #       }
  #       thrust_to_weight: Int
  #   }
  #   landing_legs {
  #       number: Int
  #       material: String
  #   }
  #   description: String
  # }
  # type Upcoming {
  #   _id: String!
  #   flight_number: Int
  #   mission_name: String
  #   launch_year: String
  #   launch_date_unix: Int
  #   launch_date_utc: String
  #   launch_date_local: String
  #   rocket {
  #       rocket_id: String
  #       rocket_name: String
  #       rocket_type: String
  #       first_stage {
  #           cores: [
  #               {
  #                   core_serial: String
  #                   flight: Int
  #                   block: Int
  #                   reused: Boolean, 
  #                   land_success: String
  #                   landing_type: String
  #                   landing_vehicle: String
  #               }
  #           ]
  #       }
  #       second_stage {
  #           payloads: [
  #               {
  #                   payload_id: String
  #                   reused: Boolean, 
  #                   customers: [
  #                       String
  #                   ], 
  #                   payload_type: String
  #                   payload_mass_kg: Float
  #                   payload_mass_lbs: String
  #                   orbit: String
  #               }
  #           ]
  #       }
  #   }
  #   telemetry {
  #       flight_club: String
  #   }
  #   reuse {
  #       core: Boolean, 
  #       side_core1: Boolean, 
  #       side_core2: Boolean, 
  #       fairings: Boolean, 
  #       capsule: Boolean
  #   }
  #   launch_site {
  #       site_id: String
  #       site_name: String
  #       site_name_long: String
  #   }
  #   launch_success: String
  #   links {
  #       mission_patch: String
  #       mission_patch_small: String
  #       reddit_campaign: String
  #       reddit_launch: String
  #       reddit_recovery: String
  #       reddit_media: String
  #       presskit: String
  #       article_link: String
  #       video_link: String
  #   }
  #   details: String
  # }

    type Query {
        allCapsules(filter: String skip: Int first: Int): [Capsule!]!
        allCores(filter: String skip: Int first: Int): [Core!]!
        allDragons(filter: String skip: Int first: Int): [Dragon!]!
    }
`
