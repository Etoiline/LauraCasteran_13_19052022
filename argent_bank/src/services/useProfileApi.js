import axios from 'axios'
import { useEffect, useState } from "react"


/**
 * Return main user data
 * 
 * @param token : user token
 * 
 * 
 * @return loadingProfile : indicates loading status
 * @return dataProfile : object containing  informations about user 
 * @return errorProfile : indicates any errors
 *    
 */
 export const useProfileApi = (token) => {
   console.log('api', token)
  const url = 'http://localhost:3001/api/v1/user/profile'
  const [loadingProfile, setLoading] = useState(true)
  const [dataProfile, setData] = useState([])
  const [errorProfile, setError] = useState(undefined)
  const headers = {
    'accept': 'application/json',
    'Authorization':'Bearer '+token
  }
  console.log('api', headers)

  useEffect(() => {
    const load = async () => {
      try {
        console.log('try')
        const response = await axios.post(url, {headers})
        let data = response.data
        console.log('api', response)
        setData(data)
        setLoading(false)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }
    load()
  }, [url])


  return {
    loadingProfile,
    dataProfile,
    errorProfile
  }
}


// {
//   "status": 200,
//   "message": "Successfully got user profile data",
//   "body": {
//     "email": "tony@stark.com",
//     "firstName": "Tony",
//     "lastName": "Stark",
//     "createdAt": "2022-05-20T14:12:19.019Z",
//     "updatedAt": "2022-05-20T14:12:19.019Z",
//     "id": "6287a1c3a3e7fa122f528c35"
//   }
// }