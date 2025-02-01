# ukatanomitama.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/af4bbd51-6bec-4009-8d2d-aa0b347f04dd/deploy-status)](https://app.netlify.com/sites/utakanomitama/deploys)

## Netlify functions

First configure an environment variable in Netlify or export manually like this:

```
export FED_API_KEY=<YOUR_API_KEY>
```

Then start a local server:

```
netlify functions:serve
```

Run cURL:

```
curl http://localhost:9999/.netlify/functions/investment_environment_score
```