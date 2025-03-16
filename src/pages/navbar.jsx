import './navbar.css'
import logo from '../assets/logo.png'
function Navbar(){
    return(
        <div className="navbar">
<img src={logo} alt="" />
<ul>
    <li><a href="">HOME</a></li>
    <li><a href="">PROJECT</a></li>
    <li><a href="">SERVICES</a></li>
    <li><a href="">ABOUT</a></li>
    <li><a href="">BLOG</a></li>
    <li><a href="">SHOP</a></li>
    <li><a href="">CONTACT</a></li>
</ul>
<button>Sign Up</button>
        </div>
    )
}
export default Navbar