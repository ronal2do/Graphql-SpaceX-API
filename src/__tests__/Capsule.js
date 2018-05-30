import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
import { graphql } from 'graphql'
import { typeDefs } from '../typeDefs'

// Make a GraphQL schema with no resolvers
const schema = makeExecutableSchema({ typeDefs })

// Add mocks, modifies schema in place
addMockFunctionsToSchema({ schema })

describe('Capsules', () => {
  const query = `
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
  `

  it('correctly object allCapsules', async () => {
    expect.assertions(1)
    const result = expect(graphql(schema, query))
    await expect(graphql(schema, query)).resolves.toMatchSnapshot(
      {
        // _id: expect.any(String)
      }
    )
  })
})
