const AWS = require('aws-sdk');

async function getAPIKeyFromParameterStore() {
  const ssm = new AWS.SSM({region: 'sa-east-1'});

  const parameterName = 'MAPBOX_ACCESS_TOKEN';

  try {
    const response = await ssm.getParameter({ Name: parameterName, WithDecryption: true }).promise();

    if (response.Parameter && response.Parameter.Value) {
      const apiKey = response.Parameter.Value;
      console.log('API Key:', apiKey);
      return apiKey;
    } else {
      console.log('API Key not found');
      return null;
    }
  } catch (error) {
    console.error('Error retrieving API Key:', error);
    return null;
  }
}

module.exports = getAPIKeyFromParameterStore;