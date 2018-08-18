const { writeFile } = require('fs').promises
const logger = require('./logger')

module.exports = async (filePath, data) => {
  try {
    await writeFile(filePath, JSON.stringify(data, null, 2))
    logger('info', ['save-file', filePath])
  } catch (error) {
    throw error
  }
}
