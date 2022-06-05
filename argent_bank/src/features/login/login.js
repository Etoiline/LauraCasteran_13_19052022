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