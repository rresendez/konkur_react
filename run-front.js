const exec = require('child_process').exec
const path = require('path')
const hostname = 'frontend-module.kunkurfrontexampledeployqa.kunkurfrontexampledeploy.bootcamp.dfw1.qa.walmart.com'
const hostnameQA = 'frontend-module.kunkurfrontexampledeployqa.kunkurfrontexampledeploy.bootcamp.qa.walmart.com'

exec(`${path.resolve('..', '..', '.bin', 'serve')} -s front-builded -l tcp://0.0.0.0:5000`, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`)
    return
  }
  console.log(`stdout: ${stdout}`)
  console.log(`stderr: ${stderr}`)
})
