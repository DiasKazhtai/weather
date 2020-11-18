import React from 'react';
import styles from './BaseDaysWeather.module.scss';

const BaseDaysWeather: React.FC = () => {
    return (
        <div className={styles.BaseDaysWeather}>
            <div className={styles.BaseDaysWeather__item}>123</div>
            <div className={styles.BaseDaysWeather__item}>123</div>
            <div className={styles.BaseDaysWeather__item}>123</div>
        </div>
    )
}

export default BaseDaysWeather;