import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './store/reducer'
import {EmpIdProvider} from './contexts/EmpId/EmpIdContext'
import {EmployeeProvider} from './contexts/Emp/EmployeeContext'
import {HistoryProvider} from './contexts/History/HistoryContext'
const store = createStore(rootReducer)


ReactDOM.render(
    <Provider store={store}>
        <EmpIdProvider>
            <EmployeeProvider>
                <HistoryProvider>
                    <App/>
                </HistoryProvider>
            </EmployeeProvider>
        </EmpIdProvider>
    </Provider>, document.getElementById('root'));

