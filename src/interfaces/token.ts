export default interface Token {
  payload: {
    id: number,
    username: string,
    passord: string
  }
  iat: number,
  exp: number,
}