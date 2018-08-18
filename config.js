module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  KEY_SECRET: process.env.KEY_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  QUEUE_DIRECTORY_PATH: process.env.JOBS_DIRECTORY_PATH || 'test/directories/queue',
  ARCHIVE_DIRECTORY_PATH: process.env.JOBS_DIRECTORY_PATH || 'test/directories/archive',
  TEMP_DIRECTORY_PATH: process.env.TEMP_DIRECTORY_PATH || 'test/directories/temp',
  QUEUE_NEXT_URL: process.env.QUEUE_NEXT_URL || 'https://example.com/api/queue/next',
  QUEUE_DELETE_URL: process.env.QUEUE_DELETE_URL || 'https://example.com/api/queue',
  PAPERTRAIL_HOSTNAME: process.env.PAPERTRAIL_HOSTNAME || 'robot-minelev-sikkersone',
  PAPERTRAIL_HOST: process.env.PAPERTRAIL_HOST || 'logs.papertrailapp.com',
  PAPERTRAIL_PORT: process.env.PAPERTRAIL_PORT || 12345
}
