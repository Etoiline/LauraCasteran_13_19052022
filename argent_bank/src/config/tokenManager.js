const tokenName = 'tokenSessionBank_'

export function getToken() {
  return localStorage.getItem(tokenName)
}

export function setToken (value) {
  localStorage.setItem(tokenName, value)
}

