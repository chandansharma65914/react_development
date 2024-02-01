function Avatar(props){
    return (
        <div>
            <img src={props.src} alt="Avtar"  style={{width:"300px", borderRadius : "100px", border :"10px"}}/>

            <p> {props.name}</p>
        </div>
    )
}

export default Avatar;