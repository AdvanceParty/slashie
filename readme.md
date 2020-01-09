# Slashies - A Slash App For Royal Slackers

## About

A basic app designed to serve as an endpoint for custom slash commands in Slack workspaces.

Serverless functions inside the /api directory are executed on the now.sh platform when called via https. Each function is intended to be used as a callable endpoint for slash commands configured in your Slack App.

## Dev

- Clone the repo
- `npm i` from the root directory to install required modules

### Requires

Node (built and test with Node 12, but _should_ be ok with 10 or 11).

## Deploy

### New deployments:

- Setup the Now CLI tool and login to your account
- CD into the project's root folder and type `now`
- That's all!

### Updating existing deployments

As above, on the proviso that the now.sh account is connected to the instance you want to update.
