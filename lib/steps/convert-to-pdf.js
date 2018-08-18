const { readFile } = require('fs').promises
const { TEMP_DIRECTORY_PATH } = require('../../config')
const convert = require('../convert')

module.exports = async data => {
  const settings = {
    format: 'pdf',
    file: `${TEMP_DIRECTORY_PATH}/${data.documentFileId}.docx`,
    outputDirectory: `${TEMP_DIRECTORY_PATH}`
  }
  const { stdout, stderr } = await convert(settings)
  console.log(stdout)
  console.error(stderr)
  const buffer = await readFile(`${TEMP_DIRECTORY_PATH}/${data.documentFileId}.pdf`)
  data.notatDocumentData = buffer.toString('base64')
  return data
}
