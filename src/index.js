import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppContext} from './Context'



ReactDOM.render(<AppContext.Provider><AppContext.Consumer>{(townData) => {
				console.log(townData)
			return <App />
		}}
			</AppContext.Consumer></AppContext.Provider>, document.getElementById('root'));

