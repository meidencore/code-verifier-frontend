import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSessionStorage } from '../hooks/useSessionStorage'
import Editor from '../components/editor/Editor'

const KatasDetailPage = () => {

  // find id from Params
  const { id } = useParams()
  //Variable to navigate between stack of routes
  const navigate = useNavigate()

  const loggedIn = useSessionStorage('sessionJWTToken')

  useEffect(() => {
    if (!loggedIn) {
      console.log(loggedIn)
      return navigate('/login')
    }
  }, [loggedIn])

  return (
    <>
      <div>KatasDetailPage: { id }</div>
      <Editor />
    </>
  )
}

export default KatasDetailPage