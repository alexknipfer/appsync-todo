import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './routes'
import registerServiceWorker from './registerServiceWorker'

import Amplify from 'aws-amplify'
import  AWSAppSyncClient from 'aws-appsync'
import { Rehydrated } from 'aws-appsync-react'
import { AUTH_TYPE } from 'aws-appsync/lib/link/auth-link'
import { ApolloProvider } from 'react-apollo'
import awsConfig from './lib/awsConfig'
import awsIdentityPoolConfig from './lib/awsIdentityPoolConfig'
import './lib/ant.css'

Amplify.configure({
  Auth: {
    identityPoolId: awsIdentityPoolConfig.AWS_POOL_ID,
    region: awsIdentityPoolConfig.AWS_POOL_REGION
  }
})

const client = new AWSAppSyncClient({
  url: `https://${awsConfig.HOST}${awsConfig.PATH}`,
  region: awsConfig.REGION,
  auth: {type: AUTH_TYPE.API_KEY, apiKey: awsConfig.AWS_API_KEY}
})

ReactDOM.render(
  <ApolloProvider client={client}>
        <Rehydrated>
            <App />
        </Rehydrated>
    </ApolloProvider>, 
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
