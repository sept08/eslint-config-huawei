const assert = require('assert')
const CLIEngine = require('eslint').CLIEngine
const cli = new CLIEngine()

const goodReport = cli.executeOnFiles([
  './**/good.js',
  './**/good.vue'
])

goodReport.results.forEach((gRpt) => {
  assert.equal(gRpt.errorCount, 0, `${gRpt.filePath} should have no error`)
})

const badReport = cli.executeOnFiles([
  './**/bad.js',
  './**/bad.vue'
])

badReport.results.forEach((bRpt) => {
  assert(bRpt.errorCount > 0, `${bRpt.filePath} should have at least one error`)
})

console.log('Test passed!')
