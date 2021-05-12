import React, { Component } from 'react';

class Project extends Component {
    state = {
        showInfo: false
    }

    handleInfo = () => {
        this.setState({
            showInfo:!this.state.showInfo
        })
        if (this.state.showInfo)
        {         	
            document.body.style.overflow = 'auto';
            //les lignes en comment ne fonctionnent pas car il faudrait un id unique à chaque card !
            //document.getElementById('popupInfo').style.display = "none" ;

        } else {   
            //var y = window.pageYOffset;
            //document.getElementById('popupInfo').style.top = toString(y);
            //document.getElementById('popupInfo').style.display = "block" ;
            document.body.style.overflow = 'hidden';
        }
    }

    render() {
        let { name, languagesIcons, source, website, info, picture } = this.props.item;
        
        return (
            <div className="project">
                <div className="icons">
                    { languagesIcons.map(icon => 
                        <i className={icon} key ={icon}></i>
                        )}
                </div>
                <div className="name">
                    <a href={website} target="_blank" rel="noopener noreferrer">
                        <h3>{name}</h3>
                        </a>
                </div>
                <div className="imageBox">
                    <a target="_blank" rel="noopener noreferrer">
                        <img src={picture} alt="website_picture" onClick={this.handleInfo}/>
                    </a>
                </div>
                <div className="infos">
                    <i className="fas fa-plus-circle" onClick={this.handleInfo}></i>
                </div>
                {
                    this.state.showInfo && (
                        <div className="showInfos">
                            <div className="infosContent">
                                <div className="head">
                                    <h2>{name}</h2>
                                    <div className="sourceCode">
                                        <a href={source} rel="noopener noreferrer" className="button" target="_blank">Code Source</a>
                                    </div>
                                </div>

                                <p className="text">{info}</p>
                                <div className="button return" onClick={this.handleInfo}>Retourner sur la page</div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Project;