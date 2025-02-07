import '../css/Form2.css'
import { useState } from 'react'
type fixany = React.MouseEvent<HTMLButtonElement>;

const Form2 = () => {
    const [name, setName] = useState({firstName: '', lastName: ''})

    const handleSummit= (e:fixany) => {
        e.preventDefault()
        console.log(name)
    }
    const handleDisplay = (e:fixany) => {
        e.preventDefault()
        console.log(name)
    }
    
  return (
    <div className='pages' >
        <div className="form">
            <form>
                <p>{name.firstName} - {name.lastName}</p>
                <input 
                required
                type="text"
                value={name.firstName} 
                onChange={(e) => setName({...name,firstName:e.target.value})}
                />
                <input 
                required
                type="password" 
                value={name.lastName} 
                onChange={(e) => setName({...name,lastName:e.target.value})}
                />
                <button onClick={handleSummit} >summit</button>
                <button onClick={handleDisplay}>Display Data</button>
            </form>
        </div>
    </div>
  )
}

export default Form2
