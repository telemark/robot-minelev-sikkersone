const saveFile = require('../save-file')
const logger = require('../logger')
const { ARCHIVE_DIRECTORY_PATH } = require('../../config')

module.exports = async data => {
  logger('info', ['save-to-archive', data._id])
  const filePath = `${ARCHIVE_DIRECTORY_PATH}/${data._id}.json`
  try {
    await saveFile(filePath, data)
    logger('info', ['save-to-archive', data._id, filePath, 'success'])
    return data
  } catch (error) {
    logger('error', ['save-to-archive', data._id, filePath, error])
    throw error
  }
}
