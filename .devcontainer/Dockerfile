ARG VARIANT="18.12-bullseye-slim"
FROM node:${VARIANT}

# Configure apt
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update \
    && apt-get -y install --no-install-recommends apt-utils 2>&1

# Install Git
RUN apt install -y git

# Install the Angular CLI
RUN npm install -g @angular/cli@15.0.4

# Clean up
ENV DEBIAN_FRONTEND=dialog

# Expose port 4200
EXPOSE 4200

# Set the default shell to bash instead of sh
ENV SHELL /bin/bash