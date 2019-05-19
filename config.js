const PATH_STATE = process.env.NODE_ENV === 'development'

const PATH = PATH_STATE ? 'https://admin.scrscript.com/blogApp' : 'https://admin.scrscript.com/blogApp'

export default PATH
