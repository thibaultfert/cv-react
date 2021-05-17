import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Javascript", xp: 1.2},
            {id: 2, value: "HTML", xp: 1.3},
            {id: 3, value: "CSS", xp: 1.3},
            {id: 4, value: "PHP", xp: 0.5}
        ],

        frameworks: [
            {id: 1, value: "Symfony", xp: 0.5},
            {id: 2, value: "React", xp: 0.3},
            {id: 3, value: "Bootstrap", xp: 0.5}
        ]
    }
    
    render() {
        let {languages, frameworks} = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languageDisplay"
                    title="languages"              
                />
                <ProgressBar
                    languages={frameworks}
                    className="frameworksDisplay"
                    title="frameworks & bibliothèques"              
                />
            </div>
        );
    }
}

export default Languages;