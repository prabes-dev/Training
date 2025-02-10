import '../css/Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='main123'>
    <ul>
        <Link to='/'> <li>Home</li></Link>
        <Link to='/dimension'><li>Dimension</li></Link>
        <Link to='/eventhandle'><li>EventHandle</li></Link>
        <Link to='/exchange'><li>Exchange</li></Link>
        <Link to='/login'><li>Login</li></Link>
        <Link to='/props'><li>Props</li></Link>
        <Link to='/render'><li>Render</li></Link>
    </ul>
</div>  )
}

export default Navbar