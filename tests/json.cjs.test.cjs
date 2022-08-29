const test = require('node:test')
const assert = require('node:assert/strict')

test('import of json module succeeded', t => {
  const { devDependencies } = require('../package.json')
  assert.deepStrictEqual(Object.keys(devDependencies).filter(key => key === 'typescript'), ['typescript'])
})
