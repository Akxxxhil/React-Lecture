import React, { useState, useEffect } from "react";
import "./Cards.css"

function Cards() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="container">
            {users.map(user => (
                <div  key={user.id} className="user-container">
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}

export default Cards;
