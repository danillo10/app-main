const {
    REACT_APP_SECRET,
    REACT_APP_URL_API
} = process.env

const config = {
    envSecret: REACT_APP_SECRET,
    envApi: REACT_APP_URL_API,
    tokenKey: "@admin-Analyticdbi-Token"
}

export default config