const bankUserFirstName = 'bankUserFirstName'
const bankUserLastName = 'bankUserLastName'

/**
 * 
 * @returns valeur du prénom
 */
export function getFirstName() {
  return localStorage.getItem(bankUserFirstName)
}
/**
 * 
 * @returns valeur du nom
 */
 export function getLastName() {
  return localStorage.getItem(bankUserLastName)
}

/**
 * setFirstName : permet de modifier la valeur du prénom
 * @param value : valeur du nouveau prénom
 */
export function setFirstName (value) {
  localStorage.setItem(bankUserFirstName, value)
}
/**
 * setLastName : permet de modifier la valeur du nom
 * @param value : valeur du nouveau nom
 */
 export function setLastName (value) {
  localStorage.setItem(bankUserLastName, value)
}

