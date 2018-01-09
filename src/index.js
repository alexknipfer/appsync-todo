import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes';
import registerServiceWorker from './registerServiceWorker';
import './antd.css'

import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from 'aws-appsync-react';
import { AUTH_TYPE } from "aws-appsync/lib/link/auth-link";
import { ApolloProvider } from 'react-apollo';
import awsConfig from './lib/awsConfig'

const client = new AWSAppSyncClient({
    url: awsConfig.ENDPOINT,
    region: awsConfig.REGION,
    auth: {type: AUTH_TYPE.API_KEY, apiKey: awsConfig.AWS_API_KEY}
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
