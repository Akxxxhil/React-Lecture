import styles from "./outerBorder.module.css"

function OuterBorder(props){
 return <div className={styles.outerBorder}>{props.children}</div>
}


export default OuterBorder