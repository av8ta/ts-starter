import test from 'node:test'
import assert from 'node:assert/strict'

import utils, { getStringLength } from '../library/lib/index.js'

test('import of default export compiled by tsc passing test', t => {
  const count = utils('Check JS')
  assert.strictEqual(count, 8)
})

test('import of named export compiled by tsc passing test', t => {
  const count = getStringLength('Check JS')
  assert.strictEqual(count, 8)
})
