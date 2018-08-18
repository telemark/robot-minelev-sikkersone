###########################################################
#
# Dockerfile
#
###########################################################

# Setting the base to nodejs 10
FROM mhart/alpine-node:10

# Maintainer
MAINTAINER Jonas Enge

#### Begin setup ####

# Installs docker
RUN apk add --update --no-cache libreoffice

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Startup
ENTRYPOINT npm start
