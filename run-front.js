const exec = require('child_process').exec
const path = require('path')

exec(`${path.resolve(__dirname, 'node_modules', '.bin', 'serve')} -s build -l 80`, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`)
    return
  }
  console.log(`stdout: ${stdout}`)
  console.log(`stderr: ${stderr}`)
})
