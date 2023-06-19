const app = require('./app');
const getAPIKeyFromParameterStore = require('./aws/AwsCalls');

async function getParams() {
    try {
      const apiKey = await getAPIKeyFromParameterStore();
      process.env.MAPBOX_ACCESS_TOKEN = apiKey;
    } catch (error) {
      console.error('Error starting the server:', error);
    }
}

getParams();

app.listen(3000, () => console.log('running node app teste'));