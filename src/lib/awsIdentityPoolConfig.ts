declare var process: {
    env: {
        REACT_APP_POOL_ID: string
        REACT_APP_POOL_REGION: string
    }
}

interface IAwsIdentityPoolConfigLayout {
    AWS_POOL_ID: string
    AWS_POOL_REGION: string
}

const awsIdentityPoolConfig: IAwsIdentityPoolConfigLayout = { 
    AWS_POOL_ID: process.env.REACT_APP_POOL_ID,
    AWS_POOL_REGION: process.env.REACT_APP_POOL_REGION,
}

export default awsIdentityPoolConfig
