function Button(props) {
    let count=0;
  return (
    <div>
      <button onClick={()=>{count++}} style={{color:props.buttonColor}}> {props.text+ count}</button>
      <p>{true ? "gofor walk":"dont go for walk"}</p>

    </div>
  );
}
export default Button;
