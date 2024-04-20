import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSessionStorage } from '../hooks/useSessionStorage'
import { getAllKatas } from '../services/katasService'
import { AxiosResponse } from 'axios'
import { Kata, KataResponse } from '../utils/types/Kata.type'


const KatasPage = () => {

  const loggedIn = useSessionStorage('sessionJWTToken')
  const navigate = useNavigate()

  // State of components
  const [ katas, setKatas ] = useState<Kata[]>([])
  const [ totalPages, setTotalPages ] = useState<number>(1)
  const [ currentPage, setCurrentPage ] = useState<number>(1)

  useEffect(() => {
    if (!loggedIn) 
    {
      return navigate('/login')
    }
    else 
    {
      getAllKatas(loggedIn, 2, 1)
        .then((response: AxiosResponse<KataResponse>) => {

          const { katas, totalPages, currentPage } = response.data
          
          if (response.status === 200 && katas && currentPage && totalPages)
            {
              setKatas(katas)
              setTotalPages(totalPages)
              setCurrentPage(currentPage)
            }
            else
            {
              throw new Error(`Error obtaining katas: ${response.data}`)
            }
        })
        .catch((error) => console.error(`[Get All Katas Error]: ${error}`))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn])
  


  /**
   * Method to navigate to a kata details
   * @param id of Kata to navigate
   */
  const navigateToKataDetail = (id: string | number) => {
    navigate(`/katas/${id}`)
  }

  return (
    <div>
      <h1>
        KatasPage
      </h1>
        { katas.length > 0 ? 
        (
          <div>
              {/* TODO Export to isolated component */}
              { katas.map((katas: Kata) => 
                (
                  <div key={katas._id} >
                    <h3 onClick={() => navigateToKataDetail(katas._id)}>{katas.name}</h3>
                    <h4>{katas.description}</h4>
                    <h5>Creator: {katas.creator}</h5>
                    <p>Rating: {katas.stars}/5</p>
                  </div>
                )
              )}

          </div>
        ) : 
        (
          <div>
            <h5>No Katas Found</h5>
          </div>
        )}
    </div>

  )
}

export default KatasPage 