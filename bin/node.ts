#!/usr/bin/env node

import getStringLength from '../lib/index.js' // note it's actually the ts file that gets imported
console.log('"Check js" string length =', getStringLength('Check js'))
