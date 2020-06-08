import React, { Component } from 'react'
import './Footer.scss';

class Footer extends Component {

    footerItem = [{ key: "Home", value: "#" }, { key: "Terms and Conditions", value: "#" }, { key: "Privacy Policy", value: "#" }, { key: "Help", value: "#" }, { key: "Manage Account", value: "#" }]
    
    render() {
        return (
            <React.Fragment>
            <div className="footer desktop black-bg white-txt page-footer font-small">
                <div>
                    {
                        this.footerItem.map((item, index) =>
                            <span key={index}><a href={item.value} className="white-txt footer-content">{item.key} </a> {(item.key !== 'Manage Account') && <span> | </span>}</span>)
                    }
                </div>
                <div className="copyright">
                    Copyright ©2016 DEMO Streaming All Rights Reserved.
            </div>
                <div className="flex-container flex-space-between social">
                    <div className="copyright justify-content-start">
                        <i className="fa fa-facebook fa-lg login" aria-hidden="true"></i>
                        <i className="fa fa-twitter fa-lg login" aria-hidden="true"></i>
                        <i className="fa fa-instagram fa-lg login" aria-hidden="true"></i>
                    </div>
                    <img className="img-width justify-content-end" src="assets/store.png" />
                </div>
            </div>

            <div className="footer mobile black-bg white-txt page-footer font-small">
                <div>
                    {
                        this.footerItem.map((item, index) =>
                            <div key={index} ><a href={item.value} className="white-txt footer-content">{item.key} </a></div>)
                    }
                </div>
                <div className="copyright">
                    Copyright ©2016 DEMO Streaming All Rights Reserved.
            </div>
                <div className="flex-container flex-space-between social">
                    <div className="copyright justify-content-start">
                        <i className="fa fa-facebook login" aria-hidden="true"></i>
                        <i className="fa fa-twitter login" aria-hidden="true"></i>
                        <i className="fa fa-instagram login" aria-hidden="true"></i>
                    </div>
                    <img className="img-width justify-content-end" src="assets/store.png" />
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Footer
