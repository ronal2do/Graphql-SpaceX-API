<div align="center">

![Imgur](https://i.imgur.com/5JlPtsF.jpg)

# SpaceX GRAPHQL API motivation https://github.com/r-spacex/SpaceX-API

[![Build Status](https://travis-ci.org/ronal2do/Graphql-SpaceX-API.svg?branch=master)](https://travis-ci.org/ronal2do/Graphql-SpaceX-API)
[![Interface](https://img.shields.io/badge/interface-grapqhl-ff69b4.svg)]()

### Open Source GRAPHQL API for rocket, core, capsule, pad, and launch data

<br></br>

</div>

## Documentation

Documentation

## Usage / Endpoints

TODO

**Example Response**

```js
  query {
    allCapsules {
      _id
      capsule_serial
      capsule_id
      status
      original_launch
      type
      details
    }
  }
```

```
{
  "data": {
    "allCapsules": [
      {
        "_id": "596eb5fc611279d39a000001",
        "capsule_serial": "C101",
        "capsule_id": "dragon1",
        "status": "retired",
        "original_launch": "2010-12-08",
        "type": "Dragon 1.0",
        "details": "Reentered after three weeks in orbit"
      },
      {
        "_id": "596eb5fc611279d39a000002",
        "capsule_serial": "C102",
        "capsule_id": "dragon1",
        "status": "retired",
        "original_launch": "2012-05-22",
        "type": "Dragon 1.0",
        "details": "First Dragon soacecraft"
      },
     ]
    }
  }
```

## Contributions

See the [Contribution](https://github.com/r-spacex/SpaceX-API/blob/master/CONTRIBUTING.md) guide for detailed steps

## Local Development

Local development info can be found [here](https://github.com/r-spacex/SpaceX-API/wiki/Local-Development)

## Technical Details

* API is using Graphql-Yoga
* All data stored in a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) 3 node replica set cluster
* Uses [Jest](https://facebook.github.io/jest/) and [Supertest](https://github.com/visionmedia/supertest) for unit/integration testing
* Uses [Travis CI](https://travis-ci.org/) for continuous integration/delivery
* API deployed TODO

## FAQ's

* If you have any questions or corrections, please open an issue and we'll get it merged ASAP
* All data and photos are property of Space Exploration Technologies Corporation (SpaceX)
* I am not affiliated with SpaceX in any way, shape, form, or fashion. Just a fun side project for me
* For any other questions or concerns, just shoot me an email

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fronal2do%2FGraphql-SpaceX-API.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fronal2do%2FGraphql-SpaceX-API?ref=badge_large)

<p align="center"><a href="https://oss.prisma.io"><img src="https://imgur.com/IMU2ERq.png" alt="Prisma" height="170px"></a></p>
