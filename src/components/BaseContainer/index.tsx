import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BaseForm from '../BaseForm';
import styles from './BaseContainer.module.scss';
import History from '../History';
import { Provider } from 'react-redux';
import store from '../../store/index';

const BaseContainer: React.FC = () => {
    return (
        <div className={styles.BaseContainer}>
            <Provider store={store}>
                <Switch>
                    <Route exact path="/" component={BaseForm}/>
                    <Route path="/history" component={History}/>
                </Switch>
            </Provider>
        </div>
    )
}

export default BaseContainer;