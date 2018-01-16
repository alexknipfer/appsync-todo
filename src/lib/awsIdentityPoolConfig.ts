declare var process: {
    env: {
        REACT_APP_IDENTITY_POOL_ID: string
        REACT_APP_COGNITO_REGION: string
        REACT_APP_USER_POOL_ID: string
        REACT_APP_WEB_CLIENT_ID: string
    }
}

interface IAwsIdentityPoolConfigLayout {
    AWS_IDENTITY_POOL_ID: string
    AWS_COGNITO_REGION: string
    AWS_USER_POOL_ID: string
    AWS_WEB_CLIENT_ID: string
}

const awsIdentityPoolConfig: IAwsIdentityPoolConfigLayout = { 
    AWS_IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
    AWS_COGNITO_REGION: process.env.REACT_APP_COGNITO_REGION,
    AWS_USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    AWS_WEB_CLIENT_ID: process.env.REACT_APP_WEB_CLIENT_ID
}

export default awsIdentityPoolConfig
