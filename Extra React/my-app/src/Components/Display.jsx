import React, { useEffect, useState } from 'react'
import Card from './Card'
import Search from "./Search"

function Display() {
    const [carddetails, setCardDetails] = useState([])
    const [searchQuery, setSearchQuery] = useState("")

    useEffect(() => {
        getRestaurants()
    }, [])

    async function getRestaurants() {
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
        const output = await data.json()
        setCardDetails(output)
    }

    const filteredCards = carddetails.filter((eachcard) => {
        return eachcard.name.toLowerCase().includes(searchQuery.toLowerCase())
    })

    return (
        <div>
            <Search setSearchquery={setSearchQuery}></Search>

            <Card carddetails={filteredCards}></Card>
        </div>
    )
}

export default Display
