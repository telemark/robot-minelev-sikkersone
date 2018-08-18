const getNextFileFromQueue = require('./lib/steps/get-next-file-from-queue')
const decryptData = require('./lib/steps/decrypt-data')
const setupArchive = require('./lib/steps/setup-archive')
const saveToArchive = require('./lib/steps/save-to-archive')
const removeFromQueue = require('./lib/steps/remove-from-queue')
const logger = require('./lib/logger')

logger('info', ['index', 'start'])

getNextFileFromQueue()
  .then(decryptData)
  .then(setupArchive)
  .then(saveToArchive)
//  .then(removeFromQueue)
  .then(data => {
    logger('info', ['index', data._id, 'finished'])
    process.exit(0)
  })
  .catch(error => {
    logger('error', ['index', 'error', JSON.stringify(error && error.message ? error.message : error)])
    process.exit(1)
  })
