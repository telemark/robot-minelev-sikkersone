module.exports = {
  KEY_SECRET: process.env.KEY_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  QUEUE_DIRECTORY_PATH: process.env.QUEUE_DIRECTORY_PATH || 'test/directories/queue',
  DONE_DIRECTORY_PATH: process.env.DONE_DIRECTORY_PATH || 'test/directories/done',
  ARCHIVE_DIRECTORY_PATH: process.env.ARCHIVE_DIRECTORY_PATH || 'test/directories/archive',
  TEMP_DIRECTORY_PATH: process.env.TEMP_DIRECTORY_PATH || 'test/directories/temp',
  PAPERTRAIL_HOSTNAME: process.env.PAPERTRAIL_HOSTNAME || 'robot-minelev-sikkersone',
  PAPERTRAIL_HOST: process.env.PAPERTRAIL_HOST || 'logs.papertrailapp.com',
  PAPERTRAIL_PORT: process.env.PAPERTRAIL_PORT || 12345
}
