import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
import { graphql } from 'graphql'
import { typeDefs } from '../typeDefs'
// Fill this in with the schema string
const schemaString = `   
  type Capsule {
    _id: String!
    capsule_serial: String!
    capsule_id: String!
    status: String!
    original_launch: String!
    type: String
    details: String
  }
`
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

  it('make a request for allCapsules', async () => {
    expect.assertions(1)

    await expect(graphql(schema, query)).resolves.toEqual({
      data: {
        allCapsules: [
          {
            _id: 'Hello World',
            capsule_id: 'Hello World',
            capsule_serial: 'Hello World',
            details: 'Hello World',
            original_launch: 'Hello World',
            status: 'Hello World',
            type: 'Hello World'
          },
          {
            _id: 'Hello World',
            capsule_id: 'Hello World',
            capsule_serial: 'Hello World',
            details: 'Hello World',
            original_launch: 'Hello World',
            status: 'Hello World',
            type: 'Hello World'
          }
        ]
      }
    })
  })

  it('correctly object allCapsules', async () => {
    expect.assertions(1)

    await expect(graphql(schema, query)).resolves.toMatchSnapshot()
  })
})
