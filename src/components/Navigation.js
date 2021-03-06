import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <div className="sidebar">
                
                <div className="id">
                    <div className="idContent">
                        <div className="imgBox"><img width="72%" src="./media/thibaultfert.jpg" alt="profil"/></div>
                        <span>Bienvenue</span>
                        <h3>Thibault Fert</h3>
                    </div>
                </div>

                <div className="navigation">
                    <ul>
                        <li>
                            <NavLink exact to="/" activeClassName="navActive">
                                <i className="icon fas fa-home"></i>
                                <p>Accueil</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/knowledges" activeClassName="navActive">
                                <i className="icon fas fa-mountain"></i>
                                <p>Compétences</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/portfolio" activeClassName="navActive">
                                <i className="icon fas fa-images"></i>
                                <p>Portfolio</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/contact" activeClassName="navActive">
                                <i className="icon fas fa-address-book"></i>
                                <p>Contact</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="socialNetwork">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/thibault-fert-828665179/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/thibaultfert" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                    </ul>
                    <div className="signature">
                        <p>Thibault Fert : 2021</p>
                    </div>
                </div>
            </div>
        </>
        
    );
};

export default Navigation;
