# reimagined-couscous
To anyone outside of my team, congratulations. You found a hidden gem!

CommunityWatch is a nonprofit PWA website with the goal to enhance non-profits abilities for needs of items or services.

### Technology Stack
We use a Typescript-based technology stack, excluding database systems.
  - **Backend**: ExpressJS with Typescript
  - **Frontend**: Next.js with Typescript
  - **Databases**: (Currently) MongoDB, 
  - Docker
  - (Currently) MongoDB
    - Will replace to PostgreSQL
  - Nginx

# Setup
This repo uses a devcontainer setup. You should open this project either in:

1) Github Codespaces
2) Visual Studio Code

Basically, you are remotely connecting to a docker container

##  Prerequisities for VSC users (not Github Codespaces)
In other words, if you plan to open this locally or in your own VM.

1) You must have Docker installed on the system you plan to open this project in.
2) You must have the "Dev Containers" extension from Microsoft installed in VSC.

Failure to do any of these will bring back the "it works for me" inconsistencies.

# Run the app (dev)

1) Open the project in a devcontainer
    
    1a) This is the default if you open in your Github Codespace.

    1b) For VSC users, a notification may show up on the bottom-right of your screen prompting you to open in a dev container.
    If not, `Ctrl + Shift + P`, type `dev containers:` and search for the appropriate option to open container.

2) Wait for the dev container to build. 

3) To start hosting the web app, run `source prod.sh`.


Dev Containers for JetBrain IDEs: https://www.jetbrains.com/help/idea/connect-to-devcontainer.html