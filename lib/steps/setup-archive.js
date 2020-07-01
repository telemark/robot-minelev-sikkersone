const datePadding = date => date.length === 0 ? '0' + date.toString() : date
const getTemplate = require('document-templates')
const logger = require('../logger')
const getSchoolInfo = require('vtfk-schools-info')
const config = require('../../config')

module.exports = async data => {
  logger('info', ['setup-archive', data._id, data.documentType, 'start'])
  const now = new Date()
  const schoolInfo = getSchoolInfo({ organizationNumber: data.schoolOrganizationNumber.replace(/\D/g, '') })[0]
  const template = getTemplate({ domain: 'minelev', templateId: 'notat' })

  const archive = {}

  archive._id = data._id
  archive.date = `${datePadding(now.getDate())}.${datePadding(now.getMonth() + 1)}.${now.getFullYear()}`
  archive.refererSystem = 'MinElev'
  archive.refererDocumentId = data._id

  archive.case = {
    generator: 'elevmappe-add-case',
    title: 'Elevmappe',
    unofficialTitle: `Elevmappe - ${data.studentName}`,
    type: 'elevmappe',
    accessCode: '13',
    accessGroup: 'VTFK Robot',
    status: 'B',
    paragraph: 'Offl. § 13 jf. fvl. § 13 (1) nr.1',
    subArchive: 'Elev',
    responsibleEnterpriseRecno: config.P360_DEFAULT_RESPONSIBLE_ENTERPRISE,
    responsiblePersonRecno: config.P360_DEFAULT_RESPONSIBLE_PERSON
  }

  archive.contacts = [
    {
      generator: 'add-private-person',
      personalIdNumber: data.studentId,
      firstName: data.studentFirstName,
      middleName: data.studentMiddleName || '',
      lastName: data.studentLastName,
      fullName: data.studentName,
      email: data.studentMail || '',
      phone: data.studentPhone || '',
      streetAddress: data.address || '',
      zipCode: data.zip,
      zipPlace: data.city,
      area: 'Vestfold og Telemark',
      caseContact: 'Sakspart',
      secret: false
    }
  ]

  archive.documents = [
    {
      generator: 'add-documents',
      title: 'Lærernotat',
      unofficialTitle: `Lærernotat - ${data.studentName}`,
      accessCode: '13',
      accessGroup: schoolInfo.accessGroup,
      signOff: false,
      documentCreated: now.toISOString(),
      category: template.archive.Category,
      paragraph: template.archive.Paragraph,
      archive: 'Personsensitivt dokument', // Recno 12
      status: template.archive.Status,
      responsibleEnterpriseNumber: data.organization,
      responsiblePersonRecno: config.P360_DEFAULT_RESPONSIBLE_PERSON,
      file: {
        title: 'Lærernotat.pdf',
        data: data.notatDocumentData
      }
    }
  ]

  data.archive = archive
  return data
}
