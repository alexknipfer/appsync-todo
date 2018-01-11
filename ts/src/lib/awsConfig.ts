declare var process: {
    env: {
        REACT_APP_AWS_ACCESS_KEY_ID: string
        REACT_APP_AWS_SECRET_ACCESS_KEY: string
        REACT_APP_AWS_API_KEY: string
        REACT_APP_AWS_HOST: string
        REACT_APP_AWS_REGION: string
    }
}

interface IAwsConfigLayout {
    AWS_ACCESS_KEY_ID: string
    AWS_SECRET_ACCESS_KEY: string
    AWS_API_KEY: string
    HOST: string
    REGION: string
    PATH: string
}

const awsConfig: IAwsConfigLayout = { 
    AWS_ACCESS_KEY_ID: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    AWS_API_KEY: process.env.REACT_APP_AWS_API_KEY,
    HOST: process.env.REACT_APP_AWS_HOST,
    REGION: process.env.REACT_APP_AWS_REGION,
    PATH: '/graphql'
}

export default awsConfig
