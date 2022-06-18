import { useEffect, useState } from "react"

// NOT SURE IF THIS IS NEEDED ATM

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