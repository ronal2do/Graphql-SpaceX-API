import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
  mockServer
} from 'graphql-tools'
import { graphql } from 'graphql'
import { typeDefs } from '../typeDefs'

const testCaseA = {
  id: 'queryType',
  query: `
    query {
    __schema {
      queryType {
        name
      }
    }
  }
  `,
  variables: {},
  context: {},
  expected: { data: { __schema: { queryType: { name: 'Query' } } } }
}

describe('Schema', () => {
  // Array of case types
  const cases = [testCaseA]

  const mockSchema = makeExecutableSchema({ typeDefs })

  // Here we specify the return payloads of mocked types
  addMockFunctionsToSchema({
    schema: mockSchema
  })

  test('has valid type definitions', async () => {
    expect(async () => {
      const MockServer = mockServer(typeDefs)

      await MockServer.query(`{ __schema { types { name } } }`)
    }).not.toThrow()
  })

  cases.forEach(obj => {
    const { id, query, variables, context: ctx, expected } = obj

    test(`query: ${id}`, async () => {
      return await expect(
        graphql(mockSchema, query, null, { ctx }, variables)
      ).resolves.toEqual(expected)
    })
  })
})
