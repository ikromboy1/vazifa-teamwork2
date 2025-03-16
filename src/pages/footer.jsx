import './footer.css'
import logo from '../assets/logo.png'
function Footer(){
    return(
        <div className="footer">
            <div className="start">
<img src={logo} alt="" />
<p>But i must explain to you all this mistaken
idea of dencouncing pleasure.</p>
</div>
<div className="links">
    <ul>
        <h1>Quick Links</h1>
       <li>
About Our Company <br />
Services WE provide <br />
Career & Opportunity <br />
Privacy & policy <br />
Contact US</li>
    </ul>
    <ul>
        <h1>Company</h1>
        <li>
About Company <br />
Our Testimonials <br />
Latest News <br />
Our misson <br />
Get a free Quot</li>
    </ul>
    <ul>
        <h1>Contact us</h1>
        <li>
Sagrada Familia, Herba <br />
Street Front USA <br />
brandoxide@gmail.com <br />
002-568423591</li>
    </ul>
    <div className="icons">
    <ul>
    <h1>Follow Us</h1>
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-square-twitter"></i>
    <i class="fa-brands fa-instagram"></i>
    <i class="fa-brands fa-invision"></i>
    </ul>
    </div>
</div>
        </div>
    )
}
export default Footer