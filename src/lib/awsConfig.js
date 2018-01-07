const config = {
    AWS_ACCESS_KEY_ID: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    AWS_API_KEY: process.env.REACT_APP_AWS_API_KEY,
    HOST: process.env.REACT_APP_AWS_HOST,
    REGION: process.env.REACT_APP_AWS_REGION,
    PATH: '/graphql'
}

config.ENDPOINT = `https://${config.HOST}${config.PATH}`

export default config