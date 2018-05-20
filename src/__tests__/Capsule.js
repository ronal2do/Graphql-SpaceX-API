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

  test('make a request for allCapsules', async () => {
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
