const { unlink } = require('fs').promises
const logger = require('./logger')

module.exports = async filePath => {
  try {
    await unlink(filePath)
    logger('info', ['delete-file', filePath, 'deleted'])
  } catch (error) {
    throw error
  }
}
