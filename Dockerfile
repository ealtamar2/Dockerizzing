FROM  node:boron

# Create app directory
RUN mkdir -p /usr/src/app/api-rest
#RUN apk add 
WORKDIR /usr/src/app/api-rest

# Install app dependencies
COPY package.json /usr/src/app/api-rest
RUN npm install

# Bundle app source
COPY . /usr/src/app/api-rest

#Set Enviroment variables
#ENV SECRET_KEY= 
#ENV ACCESS_KEY=

EXPOSE 8080
CMD [ "npm", "start" ]

