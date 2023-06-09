import React from 'react';
import westBayLogo from "../../images/LogowestBay.png"
import {Link} from 'react-router-dom';
import "./Footer.scss"

let Footer = () => {
    return (
        <footer>
            <div className="big-footer">

                <div className="footer-with-logo">
                    <img src={westBayLogo} alt="Caribbean West Bay" />
                    <div>
                        <a href="https://www.facebook.com/blackiguanagolfroatan" rel="noopener noreferrer" target="_blank" className="social-button social-fb" title="Facebook"></a>
                        {/* <a href="#" className="social-button" title="Twitter">t</a> */}
                        <a href="https://www.instagram.com/explore/tags/westbaygolf/" rel="noopener noreferrer" target="_blank" className="social-button social-ig" title="Instagram"></a>
                    </div>
                    <p>
                        <a href="https://www.google.com/maps/place/West+Bay+Golf+Club+and+Villas/@16.2774267,-86.593264,15z/data=!4m5!3m4!1s0x0:0x318659a77ec3b86d!8m2!3d16.2774267!4d-86.593264" target="_blank" rel="noopener noreferrer">
                            Palm Ln, West Bay, <br/>
                            Honduras
                        </a>
                    </p>
                    <div className="footer-important-links">
                        <a href="phone:+504 9683-7049" title="Call West Bay">+504 9683-7049</a>
                        <br/>
                        <a href="mailto:info@westbaygolfclubvillas.com" title="Contact West Bay">info@westbaygolfclubvillas.com</a>
                    </div>
                </div>

                <div className="footer-menu">
                    <ul>
                        <li> <Link to="/">Home</Link></li>
                        <li> <Link to="/golf">Golf</Link> </li>
                        <li> <Link to="/about-us">About us</Link></li>
                        <li> <Link to="/residences">The Residence</Link></li>
                        <li> <Link to="#" onClick={() => {
                            const menu = document.querySelector('.generalContactContainer')
                            menu.classList.remove('toggleContact')
                        }}>Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-weather">
                    <div className="weather-widget">
                        <a className="weatherwidget-io" href="https://forecast7.com/en/16d32n86d54/coxen-hole/?unit=us" data-label_1="ROATÁN" data-label_2="WEATHER" data-icons="Climacons Animated" data-days="5" data-textcolor="#FFF" >ROATÁN WEATHER</a>
                    </div>
                   
                    <a href="https://roatansir.com/?utm_medium=site&utm_source=westbaygolfclubvillas" target="_blank">
                        <img src="/roatan-life-logo.png" alt="Roatan Sir"/>
                    </a>
                    <div className="footer-logo-vertical-align">
                        <div>
                            <img src="/blackiguana-logo.png" alt="Black Iguana"/>
                        </div>
                        <div>
                            <a href="https://www.dyedesigns.com/perry-dye/" target="_blank">
                                <img src="/dyedesign-logo.png" alt="Dye design" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">
                Copyright © 2020 by West Bay Golf Club & Villas. All Rights Reserved. Designed and developed by PRYNT
            </div>
        </footer>
    )
}
export default Footer
