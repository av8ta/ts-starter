import test from 'node:test'
import assert from 'node:assert/strict'

import { devDependencies } from '../dist/lib/json.js'

test('import of json module succeeded', t => {
  assert.deepStrictEqual(Object.keys(devDependencies).filter(key => key === 'typescript'), ['typescript'])
})
