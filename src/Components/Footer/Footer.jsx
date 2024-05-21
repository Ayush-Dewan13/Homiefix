import React from 'react'
import './footer.css';

function Footer() {
  return (
    <div className="footer">
            <div className="fLists">
                <ul className="fList">
                    <li className="fListItem">Countries</li>
                    <li className="fListItem">Regions</li>
                    <li className="fListItem">Cities</li>
                    <li className="fListItem">Districts</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">Carpenter</li>
                    <li className="fListItem">Painter</li>
                    <li className="fListItem">Interior Designer</li>
                    <li className="fListItem">Plumber</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">House</li>
                    <li className="fListItem">Offices</li>
                    <li className="fListItem">Apartments</li>
                    <li className="fListItem">Hotels</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">About HomieFix.co</li>
                    <li className="fListItem">Customer Service help</li>
                    <li className="fListItem">Join As a Tradesperson</li>
                    <li className="fListItem">Terms & Conditions</li>
                </ul>
            </div>
        <div className="fText">Copyright © 2024 HomieFix™ . All rights reserved.</div>
    </div>
  )
}

export default Footer