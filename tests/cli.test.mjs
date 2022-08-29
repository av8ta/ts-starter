import test from 'node:test'
import assert from 'node:assert/strict'
import { exec } from 'node:child_process'
import path from 'node:path'

const tsScriptPath = path.join(process.cwd(), 'bin', 'ts-node.ts')
const tsNodeCommand = `NODE_OPTIONS='--loader ts-node/esm' ${tsScriptPath}`
const jsScriptPath = path.join(process.cwd(), 'library', 'bin', 'node.js')

test('chmod +x ts script succeeds', () => {
  return new Promise((resolve, reject) => {
    exec(`chmod +x ${tsScriptPath}`, (error, stdout) => {
      assert(error === null)
      resolve()
    })
  })
})

test('running ts cli script with ts-node succeeds', () => {
  return new Promise((resolve, reject) => {
    exec(tsNodeCommand, (_, stdout) => {
      assert.strictEqual(stdout, '"Check ts" string length = 8\n')
      resolve()
    })
  })
})

test('chmod +x js script succeeds', () => {
  return new Promise((resolve, reject) => {
    exec(`chmod +x ${jsScriptPath}`, (error, stdout) => {
      assert(error === null)
      resolve()
    })
  })
})

test('running js cli script with node succeeds', () => {
  return new Promise((resolve, reject) => {
    exec(`${jsScriptPath}`, (_, stdout) => {
      assert.strictEqual(stdout, '"Check js" string length = 8\n')
      resolve()
    })
  })
})
