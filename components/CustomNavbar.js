import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Sticky from 'react-stickynode';

class CustomNavbar extends Component {
    render() {
        var {mClass, nClass, cClass, slogo, hbtnClass} =this.props;
        return (
            <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
                <header className="header_area">
                <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
                    <div className={`container ${cClass}`}>
                        <Link className={`navbar-brand ${slogo}`} to="/">
                            {/* <img style={{width:"150px",height:"100px",objectFit:"contain"}} src={require("../img/nature-logo.png")} alt=""/> */}
                            {/* <img style={{width:"150px",height:"100px",objectFit:"contain"}} src={require("../img/nature-logo.png")} alt="logo"/> */}
                            <h1>Logo1</h1>
                        </Link>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="menu_toggle">
                                <span className="hamburger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                                <span className="hamburger-cross">
                                    <span></span>
                                    <span></span>
                                </span>
                            </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                               
                            <li className="nav-item"><NavLink exact title="Home" className="nav-link" to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink exact title="Dashboard" className="nav-link" to="/Profile">Dashboard</NavLink></li>
                            <li className="nav-item"><NavLink exact title="Contact" className="nav-link" to="/Contact">Contact</NavLink></li>

                                
                            </ul>
                            <button className={`btn_get btn_hover ${hbtnClass}`} onClick={() => this.props.logout()}>Logout</button>
                        </div>
                    </div>
                </nav>
                </header>
            </Sticky>
        );
    }
}

export default CustomNavbar;