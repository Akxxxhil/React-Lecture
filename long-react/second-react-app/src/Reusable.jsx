function Reusable(){

    let random=Math.random()*100
    return <div>
        <p>the random number is :{Math.round(random)}</p>
    </div>
}

export default Reusable