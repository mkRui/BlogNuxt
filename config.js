const PATH_STATE = process.env.NODE_ENV === 'development'

const PATH = PATH_STATE ? 'http://localhost:3000/blogApp' : ''

export default PATH
