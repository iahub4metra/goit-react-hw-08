import { useDispatch, useSelector } from "react-redux"
import Layout from "../Layout/Layout"
import { selectRefreshing } from "../../redux/auth/selectors"
import { useEffect } from "react"
import { refreshUser } from "../../redux/auth/operations"

const App = () => {
  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectRefreshing)

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])
  return isRefreshing ? (<p>Refreshing user</p>) : <Layout/>
}

export default App
