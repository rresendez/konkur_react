const exec = require('child_process').exec
const path = require('path')
const hostname = 'frontend-module.kunkurfrontexampledeployqa.kunkurfrontexampledeploy.bootcamp.dfw1.qa.walmart.com'

exec(`${path.resolve(__dirname, 'node_modules', '.bin', 'serve')} -s build -l tcp://${hostname}5000`, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`)
    return
  }
  console.log(`stdout: ${stdout}`)
  console.log(`stderr: ${stderr}`)
})
