const tokenName = 'tokenSessionBank_'

/**
 * 
 * @returns valeur du token
 */
export function getToken() {
  return localStorage.getItem(tokenName)
}

/**
 * setToken : permet de modifier la valeur du token
 * @param value : nom du token à modifier
 */
export function setToken (value) {
  localStorage.setItem(tokenName, value)
}

