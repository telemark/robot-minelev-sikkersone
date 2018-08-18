const { writeFile } = require('fs').promises
const uuid = require('uuid-random')
const generateDocx = require('generate-docx')
const getTemplatePath = require('tfk-saksbehandling-minelev-templates')
const { TEMP_DIRECTORY_PATH } = require('../../config')
const logger = require('../logger')

module.exports = async data => {
  const documentFileName = `${TEMP_DIRECTORY_PATH}/${uuid()}.docx`
  const documentTemplate = getTemplatePath('notat')
  const documentOptions = {
    template: {
      filePath: documentTemplate,
      data: {
        tittel: 'notat',
        notat: data.documentContent
      }
    }
  }
  const documentData = await generateDocx(documentOptions)
  await writeFile(documentFileName, documentData)
  data.documentFileName = documentFileName
  logger('info', ['generate-document', data._id, 'document created', documentFileName])
  return data
}
