import React from 'react'

function Navbar() {
    return (
        <>
            <div style={{ display: "flex",justifyContent:"space-between"}}>
                <div>User Details</div>
                <div>
                    <ul style={{ display: "flex", listStyleType: "none", gap: "10px",marginRight:"15px" }}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
