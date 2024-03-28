import { useParams } from "react-router-dom"

export const UserDetails = () => {

    // const params = useParams()
    // const userId = params.userId

    const { userId } = useParams()  // destructured of the userId

    return (
        <div>Details about User {userId}</div>
    )
}