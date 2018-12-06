#########################
# PRODUCTION CONTAINER #
FROM node:latest 

WORKDIR /usr/src/app

COPY . .

#TO BUILD INSIDE A CONTAINER
#RUN npm install && npm run build


#TO DEPLOY ALREADY BUILT FROM PIPELINE
RUN npm i


EXPOSE 3000

CMD [ "npm", "start" ]
