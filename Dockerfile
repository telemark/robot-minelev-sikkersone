FROM mhart/alpine-node:13.14

#### Begin setup ####

# Installs libreoffice
RUN apk add --update --no-cache libreoffice ttf-freefont ttf-opensans ttf-ubuntu-font-family ttf-inconsolata

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Startup
ENTRYPOINT npm start
