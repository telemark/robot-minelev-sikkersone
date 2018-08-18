const deleteFile = require('../delete-file')
const logger = require('../logger')
const { QUEUE_DIRECTORY_PATH } = require('../../config')

module.exports = async data => {
  const filePath = `${QUEUE_DIRECTORY_PATH}/${data._id}.json`
  try {
    await deleteFile(filePath)
    logger('info', ['remove-from-queue', data._id, filePath, 'success'])
    return data
  } catch (error) {
    logger('error', ['remove-from-queue', data._id, filePath, error])
    throw error
  }
}
