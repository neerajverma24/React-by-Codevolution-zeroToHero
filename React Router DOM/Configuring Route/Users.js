import { Outlet, useSearchParams } from "react-router-dom"
export const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const isActiveUser = searchParams.get('filter')

    return (
        <>
            <h2>User 1</h2>
            <h2>User 2</h2>
            <h2>User 3</h2>

            <Outlet />

            <div>
                <button onClick={() => setSearchParams({ filter: 'active' })}>Active Users</button>
                <button onClick={() => setSearchParams({})}>Filter Reset</button>

                {
                    isActiveUser ? <h2>Showing Active Users</h2> :
                        <h2>Showing All Users</h2>
                }
            </div>
        </>
    )
}