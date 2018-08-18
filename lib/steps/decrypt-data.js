const code = require('crypto-props')
const logger = require('../logger')
const { JWT_SECRET } = require('../../config')

module.exports = async data => {
  try {
    logger('info', ['decrypt-data'])
    const decryptOptions = {
      secret: JWT_SECRET,
      data,
      method: 'decrypt',
      exclude: ['_id', 'timeStamp', 'isQueued']
    }

    const decrypted = code(decryptOptions)
    logger('info', ['decrypt-data', 'done'])
    return decrypted
  } catch (error) {
    throw error
  }
}
