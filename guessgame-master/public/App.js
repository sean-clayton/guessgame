import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Game from './Game.js';
import Game Engine from './Guessengine.js';

const Header = (props) => (
    <nav className="header navbar navbar-dark bg-dark">
        <div className="container">
            <div className="row m-auto">
                <i className="fa fa-gamepad fa-3x text-white my-auto"></i>
                <div className="h4 ml-3 my-auto text-light" href="/">{props.title}</div>
            </div>
        </div>
    </nav>
);

Header.defaultProps = {
    title: 'Title'
};

Header.propTypes = {
    title: PropTypes.string
};
          </header>
        </div>
      );
    }
}
export default App;
