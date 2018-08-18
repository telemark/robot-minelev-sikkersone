const deleteFile = require('../delete-file')
const logger = require('../logger')
const { TEMP_DIRECTORY_PATH } = require('../../config')

module.exports = async data => {
  const filePathDocx = `${TEMP_DIRECTORY_PATH}/${data.documentFileId}.docx`
  const filePathPdf = `${TEMP_DIRECTORY_PATH}/${data.documentFileId}.pdf`
  try {
    await deleteFile(filePathDocx)
    logger('info', ['remove-temporary-files', data._id, filePathDocx, 'success'])
    await deleteFile(filePathPdf)
    logger('info', ['remove-temporary-files', data._id, filePathPdf, 'success'])
    return data
  } catch (error) {
    logger('error', ['remove-from-queue', data._id, filePathDocx, filePathPdf, error])
    throw error
  }
}
