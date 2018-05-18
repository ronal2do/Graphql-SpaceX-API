## PR Steps

**NOTE**: Make sure every change is covered by a unit test. If the change isn't
covered, make sure to add a test for it.

1.  Fork the repo, make changes, add tests, commit, and submit a Pull Request

2.  New Pull Requests will automatically trigger a Travis CI Build

3.  If the build fails, look at the [Build Logs](https://travis-ci.org/ronal2do/Graphql-SpaceX-API).
    Changes will not be merged unless the build passes.

4.  If the build succeeds, the pull request will be merged, and automatically
    pushed to the staging server at [http://stage.spacexdata.com/v2/](http://stage.spacexdata.com/v2/) for a
    final check before promoting changes to production at [https://api.spacexdata.com/v2/](https://api.spacexdata.com/v2/).

## Local Development

1.  Clone the repo

```bash
git clone https://github.com/ronal2do/Graphql-SpaceX-API.git && cd Graphql-SpaceX-API
```

2.  Install dependencies

```bash
yarn install
```

3.  Run ESlint and all tests

```bash
yarn test
```

4.  Start the app

```bash
yarn start
```
