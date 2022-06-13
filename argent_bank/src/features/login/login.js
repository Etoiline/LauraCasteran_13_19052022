/**
 * Fonction permettant de vérifier si l'utilisateur est connecté
 * @returns true si l'utilisateur est connecté, false sinon
 */
export function isLogged () {
 // console.log('tokenSessionBank_', localStorage.getItem('tokenSessionBank_'))
  if (localStorage.getItem('tokenSessionBank_')) {
   // console.log('tokensession', localStorage.getItem('tokenSessionBank_'))
    return true
  }
  else {
    return false
  }
}