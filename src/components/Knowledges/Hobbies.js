import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>Course à pied</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-hiking"></i>
                    <span>Randonnée</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-guitar"></i>
                    <span>Guitare</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-drum"></i>
                    <span>Batterie</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;