import styles from './style.module.css'

let Card = (props)=>{
    let {name,coarse,code,image}=props
    return (
        <>
            <div className={styles.mainDiv}>
            <div className="left_container">
                <img className={styles.image} src={image} alt="myimage" />
            </div>
            <div className="right_container">
                <h1>Name:{name}</h1>
                <h1>Code:{code}</h1>
                <h1>Coarse:{coarse}</h1>
            </div>

            </div>
        </>
    )
}

export default Card;