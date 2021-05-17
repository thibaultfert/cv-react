import React from 'react';

const Experience = () => {
    return (
        <div className="experience">
            <h3>Expérience</h3>
            <div className="exp-1">
                <h4>Développeur Web - Personnel</h4>
                <h5>2020-2021</h5>
                <p>Après avoir acquis les compétences essentielles pour réaliser un projet Web, j'ai de suite mis cela en pratique en produisant le site vitrine d'un professionnel du vin. J'ai ensuite décidé d'améliorer ce site et lui fournir les fonctionnalités qui lui manquait (contact, panier, compte utilisateur). 
                Pour cela j'ai suivi une formation Symfony en apprenant préalablement PHP et MySQL. J'ai alors pu fournir la version 2 de ce site vitrine qui profite également de ma formation Bootstrap. Enfin j'ai voulu consolider mes compétences en React et m'initier à Sass en développant mon CV que vous avez sous les yeux à cet instant.</p>
            </div>
            <div className="exp-2">
                <h4>Développeur Test Industrielle - Dassault Aviation</h4>
                <h5>2013-2021</h5>
                <p>Développement de programmes de test pour cartes électroniques du F7X afin de résoudre des problèmes constatés en exploitation.
                Migration et développement de tests d'exploitation visant des équipements du RAFALE sur bancs industriels en utilisant des langages propriétaires (ATLAS, VIVA).</p>
            </div>
        </div>
    );
};

export default Experience;