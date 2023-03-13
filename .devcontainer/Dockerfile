ARG VARIANT="19.7.0-bullseye-slim"
FROM node:${VARIANT}

# Configure apt
RUN apt-get -y update && apt-get install -y git --no-install-recommends

# Install the Angular CLI   
RUN npm install -y -g @angular/cli@15.0.4

# Expose port 4200
EXPOSE 4200

# Set the default shell to bash instead of sh
ENV SHELL /bin/bash

