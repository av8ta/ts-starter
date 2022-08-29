import test from 'node:test'
import assert from 'node:assert/strict'

import utils, { getStringLength } from './commonjs.cjs'

import utilsEsm, { getStringLengthEsm } from './esm.mjs'

test('import of default commonjs export passing test', t => {
  const count = utils.getStringLength('Check JS')
  assert.strictEqual(count, 8)
})

test('import of named commonjs export passing test', t => {
  const count = getStringLength('Check JS')
  assert.strictEqual(count, 8)
})

test('import of default esm export passing test', t => {
  const count = utilsEsm('Check JS')
  assert.strictEqual(count, 8)
})

test('import of named esm export passing test', t => {
  const count = getStringLengthEsm('Check JS')
  assert.strictEqual(count, 8)
})
