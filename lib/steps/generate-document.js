const { writeFile } = require('fs').promises
const uuid = require('uuid-random')
const generateDocx = require('generate-docx')
const getTemplatePath = require('tfk-saksbehandling-minelev-templates')
const { TEMP_DIRECTORY_PATH } = require('../../config')
const logger = require('../logger')
const datePadding = require('../date-padding')

module.exports = async data => {
  const now = new Date()
  const date = datePadding(now.getDate()) + '.' + datePadding(now.getMonth() + 1) + '.' + now.getFullYear()
  const documentFileId = uuid()
  const documentFileName = `${TEMP_DIRECTORY_PATH}/${documentFileId}.docx`
  const documentTemplate = getTemplatePath('notat')
  const documentOptions = {
    template: {
      filePath: documentTemplate,
      data: {
        dato: date,
        navnAvsender: data.userName,
        navnElev: data.studentName,
        navnSkole: data.schoolName,
        innholdNotat: data.documentContent || ''
      }
    }
  }
  const documentData = await generateDocx(documentOptions)
  await writeFile(documentFileName, documentData)
  data.documentFileId = documentFileId
  logger('info', ['generate-document', data._id, 'document created', documentFileName])
  return data
}
