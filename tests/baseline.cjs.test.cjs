const test = require('node:test')
const assert = require('node:assert/strict')

test('require of default commonjs export passing test', t => {
  const utils = require('./commonjs.cjs')

  const count = utils.getStringLength('Check JS')
  assert.strictEqual(count, 8)
})

test('require of named commonjs export passing test', t => {
  const { getStringLength } = require('./commonjs.cjs')

  const count = getStringLength('Check JS')
  assert.strictEqual(count, 8)
})

test('dynamic import of default esm export passing test', async t => {
  const { default: utils } = await import('./esm.mjs')

  const count = utils('Check JS')
  assert.strictEqual(count, 8)
})

test('dynamic import of named esm export passing test', async t => {
  const { getStringLengthEsm } = await import('./esm.mjs')

  const count = getStringLengthEsm('Check JS')
  assert.strictEqual(count, 8)
})
