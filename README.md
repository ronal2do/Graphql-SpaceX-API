<div align="center">

![Imgur](https://i.imgur.com/5JlPtsF.jpg)

# SpaceX GRAPHQL API motivation https://github.com/r-spacex/SpaceX-API

[![Travis](https://img.shields.io/travis/r-spacex/SpaceX-API.svg?style=flat-square)](https://travis-ci.org/r-spacex/SpaceX-API)
[![Docker Build Statu](https://img.shields.io/docker/build/jakewmeyer/spacex-api.svg?style=flat-square)](https://hub.docker.com/r/jakewmeyer/spacex-api/)
[![GitHub release](https://img.shields.io/github/release/r-spacex/SpaceX-API.svg?style=flat-square)]()
[![Interface](https://img.shields.io/badge/interface-REST-brightgreen.svg?style=flat-square)]()

### Open Source GRAPHQL API for rocket, core, capsule, pad, and launch data

<br></br>

</div>

## Documentation

Documentation

## Usage / Endpoints

**Example Response**

```http
GET https://api.spacexdata.com/v2/launches/latest
```

```json
{
  "flight_number": 61,
  "mission_name": "Bangabandhu-1",
  "launch_year": "2018",
  "launch_date_unix": 1526069640,
  "launch_date_utc": "2018-05-11T20:14:00Z",
  "launch_date_local": "2018-05-11T16:14:00-04:00",
  "rocket": {
    "rocket_id": "falcon9",
    "rocket_name": "Falcon 9",
    "rocket_type": "FT",
    "first_stage": {
      "cores": [
        {
          "core_serial": "B1046",
          "flight": 1,
          "block": 5,
          "reused": false,
          "land_success": true,
          "landing_type": "ASDS",
          "landing_vehicle": "OCISLY"
        }
      ]
    },
    "second_stage": {
      "payloads": [
        {
          "payload_id": "Bangabandhu-1",
          "reused": false,
          "customers": ["Bangladesh Gov"],
          "payload_type": "Satellite",
          "payload_mass_kg": 3750,
          "payload_mass_lbs": 8270,
          "orbit": "GTO"
        }
      ]
    }
  },
  "telemetry": {
    "flight_club": "https://www.flightclub.io/result?code=BNG1"
  },
  "reuse": {
    "core": false,
    "side_core1": false,
    "side_core2": false,
    "fairings": false,
    "capsule": false
  },
  "launch_site": {
    "site_id": "ksc_lc_39a",
    "site_name": "KSC LC 39A",
    "site_name_long": "Kennedy Space Center Historic Launch Complex 39A"
  },
  "launch_success": true,
  "links": {
    "mission_patch": "https://images2.imgbox.com/07/15/dD7LXPVF_o.png",
    "mission_patch_small": "https://images2.imgbox.com/64/33/NuiM3QU1_o.png",
    "reddit_campaign":
      "https://www.reddit.com/r/spacex/comments/8624iq/bangabandhu1_launch_campaign_thread/",
    "reddit_launch":
      "https://www.reddit.com/r/spacex/comments/8ia091/rspacex_bangabandhu1_official_launch_discussion",
    "reddit_recovery": null,
    "reddit_media":
      "https://www.reddit.com/r/spacex/comments/8ia5bu/rspacex_bangabandhu1_media_thread_videos_images/",
    "presskit":
      "http://www.spacex.com/sites/spacex/files/bangabandhupresskit51118.pdf",
    "article_link":
      "https://spaceflightnow.com/2018/05/11/spacex-debuts-an-improved-human-rated-model-of-the-falcon-9-rocket/",
    "video_link": "https://www.youtube.com/watch?v=rQEqKZ7CJlk"
  },
  "details": "First launch of a Block V first stage."
}
```

## Contributions

See the [Contribution](https://github.com/r-spacex/SpaceX-API/blob/master/CONTRIBUTING.md) guide for detailed steps

## Local Development

Local development info can be found [here](https://github.com/r-spacex/SpaceX-API/wiki/Local-Development)

## Technical Details

* API is using [Node.js](https://nodejs.org/en/) with the [Koa](http://koajs.com/) framework
* All data stored in a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) 3 node replica set cluster
* Latest database mongodump available [here](https://drive.google.com/drive/folders/0B2DdgKR4GR4xdk1sRGowcUZXeE0?usp=sharing)
* Uses [Redis](https://redis.io/) for route caching
* Uses [Jest](https://facebook.github.io/jest/) and [Supertest](https://github.com/visionmedia/supertest) for unit/integration testing
* Uses [Travis CI](https://travis-ci.org/) for continuous integration/delivery
* API deployed on a [Heroku](https://www.heroku.com/) pipeline with pull request, staging and production servers

## FAQ's

* If you have any questions or corrections, please open an issue and we'll get it merged ASAP
* All data and photos are property of Space Exploration Technologies Corporation (SpaceX)
* I am not affiliated with SpaceX in any way, shape, form, or fashion. Just a fun side project for me
* For any other questions or concerns, just shoot me an email

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fronal2do%2FGraphql-SpaceX-API.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fronal2do%2FGraphql-SpaceX-API?ref=badge_large)
