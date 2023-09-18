// import React from 'react';
import PropTypes from 'prop-types'; // ES6


const Links = ({route}) => {
    return (
        
        <li className="m-10" key={route.id}><a className="text-2xl font-medium" href={route.path}>{route.name}</a></li>
    );
};

Links.propTypes = {
    route: PropTypes.object,
    
}

export default Links;

