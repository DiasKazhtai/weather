import React from 'react';
import BaseForm from '../BaseForm';
import styles from './BaseContainer.module.scss';

const BaseContainer: React.FC = () => {
    return (
        <div className={styles.BaseContainer}>
            <BaseForm />
        </div>
    )
}

export default BaseContainer;