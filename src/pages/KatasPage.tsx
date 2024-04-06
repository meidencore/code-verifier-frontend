import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSessionStorage } from '../hooks/useSessionStorage'


const KatasPage = () => {

  const loggedIn = useSessionStorage('sessionJWTToken')
  const navigate = useNavigate()

  useEffect(() => {
    if (!loggedIn) {
      console.log(loggedIn);
      return navigate('/login')
    }
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
      KatasPage

      {/* TODO Real Katas */}
      <ul>
        {/* TODO Export to isolated component */}
        <li onClick={ () => { navigateToKataDetail(1) } }>Kata 1</li>
        <li onClick={ () => { navigateToKataDetail(2) } }>Kata 2</li>
      </ul>
    </div>

  )
}

export default KatasPage