import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from 'aws-appsync-react';
import { AUTH_TYPE } from "aws-appsync/lib/link/auth-link";
import { graphql, ApolloProvider, compose } from 'react-apollo';
import * as AWS from 'aws-sdk';
import awsConfig from './lib/awsConfig'

AWS.config.update({
    region: awsConfig.AWS_ACCESS_KEY_ID,
    credentials: new AWS.Credentials({
        accessKeyId: awsConfig.AWS_SECRET_ACCESS_KEY,
        secretAccessKey: awsConfig.AWS_SECRET_ACCESS_KEY
    })
})

const client = new AWSAppSyncClient({
    url: awsConfig.ENDPOINT,
    region: awsConfig.REGION,
    auth: {type: AUTH_TYPE.AWS_IAM, credentials: AWS.config.credentials}
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <Rehydrated>
            <App />
        </Rehydrated>
    </ApolloProvider>, 
    document.getElementById('root')
)

registerServiceWorker()
