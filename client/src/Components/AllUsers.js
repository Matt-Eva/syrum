import { useEffect, useState } from "react"

const AllUsers = () => {

    useEffect(() => {
        fetch('/users').then((r) => {
            if (r.ok) {
              r.json().then((data) => console.log(data));
            }
        })
    }, [])
    return (
        <div>

        </div>
    )
}

export default AllUsers