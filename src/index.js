import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {ContextProvider} from './Context';
import { GlobalStyles } from './globalStyles';

import App from './App';

ReactDOM.render(
<ContextProvider>
	<Router>
		<GlobalStyles />
		<App />
	</Router>
</ContextProvider>,document.getElementById('root')
)