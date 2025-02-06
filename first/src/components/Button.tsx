
const Button = () => {
    const handleClick = () => {
        console.log('Button clicked!')
    } 
  return (
    <div>
        <button onClick={handleClick}>click here</button>
    </div>
  )
}

export default Button