const fs = require('fs').promises
const { QUEUE_DIRECTORY_PATH } = require('../../config')
const logger = require('../logger')
const isJson = file => file.endsWith('.json')

module.exports = async () => {
  try {
    const files = await fs.readdir(QUEUE_DIRECTORY_PATH)
    console.log(files)
    const file = files.filter(isJson)[0]
    if (file) {
      logger('info', ['get-next-job-from-queue', 'job found', file])
      const filePath = `../../${QUEUE_DIRECTORY_PATH}/${file}`
      logger('info', ['get-file-data', filePath])
      const data = require(filePath)
      if (data) {
        logger('info', ['get-file-data', data._id, 'data found'])
        return data
      } else {
        logger('error', ['get-file-data', 'error', new Error('File not found')])
        throw new Error('File not found')
      }
    } else {
      logger('info', ['get-next-job-from-queue', 'no jobs found'])
      process.exit(0)
    }
  } catch (error) {
    throw error
  }
}
