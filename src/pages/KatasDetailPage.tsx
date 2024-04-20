import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSessionStorage } from '../hooks/useSessionStorage'
import Editor from '../components/editor/Editor'
import { getKatasById } from '../services/katasService'
import { Kata } from '../utils/types/Kata.type'
import { AxiosResponse } from 'axios'

const KatasDetailPage = () => {

  const loggedIn = useSessionStorage('sessionJWTToken')
  //Variable to navigate between stack of routes
  const navigate = useNavigate()
  // find id from Params
  const { id } = useParams()

  const [kata, setKata] = useState<Kata | undefined>(undefined)
  const [showSolution, setShowSolution] = useState<boolean>(false)


  useEffect(() => {
    if (!loggedIn) 
    {
      console.log(loggedIn)
      return navigate('/login')
    }
    else
    {
      if (id)
        {
          getKatasById(loggedIn, id)
            .then((response: AxiosResponse<Kata>) => {
              if (response.status === 200 && response.data)
              {
                const kata = {...response.data}
                setKata(kata)                
              }
            })
            .catch((error) => console.error(`[Error getting Kata by ID]: ${error}`))
        }
        else
        {
          return navigate('/katas')
        }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn])

  return (
    <div>
      <h1>
        KatasDetailPage: { id }
      </h1>
      {
        kata ? 
        <div className='kata-data'>
          <h2>{kata.description}</h2>
          <h3>Rating: {kata.stars}</h3>
          <button onClick={() => {setShowSolution(!showSolution)}}>
            {showSolution ? "Hide Solution" : "Show Solution"}
          </button>
    
          { showSolution ? <Editor>{kata.solution}</Editor> : null }
        </div>
        :
        <div>
          <h2>Loading Data</h2>
        </div>
      }

      
    </div>
  )
}

export default KatasDetailPage