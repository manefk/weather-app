import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppContext, AppProvider} from './Context'

ReactDOM.render(<AppProvider>
					<AppContext.Consumer>{(townData) => {
						console.log(townData)
						return <App />
						}}
					</AppContext.Consumer>
				</AppProvider>, document.getElementById('root'));

