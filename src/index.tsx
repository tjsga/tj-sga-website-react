import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

console.log(
	"%cThis app is available on Github, if you're interested in the code!",
	'font-size: 20px'
);
console.log(
	'%chttps://github.com/tjsga/tj-sga-website-react',
	'font-size: 20px'
);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
