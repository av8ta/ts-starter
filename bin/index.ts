#!/usr/bin/env ts-node

import getStringLength from '../src/index.js' // note it's actually the ts file that gets imported and then jit compiled by ts-node

console.log('"Check ts" string length =', getStringLength('Check ts'))

console.error('Type error in cli script ! :)')
console.error('Uncomment x assignment in script to see error thrown...')

let x: Number

// x = 'oops, should be Number'
