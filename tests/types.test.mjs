import test from 'node:test'
import fs from 'fs-extra'
import { join } from 'path'

test('output of types succeeded', t => {
  return new Promise((resolve, reject) => {
    fs.pathExists(join(process.cwd(), 'dist', 'types', 'greeting.d.ts'), (error, exists) => {
      if (error) reject()
      if (!exists) reject()
      resolve()
    })
  })
})
