import './Items.css'

function Items(props) {
    let myBio=props.name;
    return (
        <p className="akhil">
         {myBio}  
        </p>

    );
}

export default Items;