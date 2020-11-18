import React from 'react';
import styles from './BaseForm.module.scss';
import Rain from '../../images/rain.png';
import BaseDaysWeather from '../BaseDaysWeather';

const BaseForm: React.FC = () => {
    return (
        <div className={styles.BaseForm}>
            <div className={styles.BaseForm__wrap}>
                <div className={styles.BaseForm__cityName}>Костанай</div>
                <div className={styles.BaseForm__text}>среда 12:00</div>
                <div className={styles.BaseForm__text}>Небольшой снег</div>
                <div className={styles.BaseForm__currentDayInfo}>
                    <div className={styles.BaseForm__temperature}>
                        <img className={styles.BaseForm__weather} src={Rain} alt="rain"/>
                        <div>-4</div>
                    </div>
                    <div className={styles.moreInfo}>
                        <label>
                            Введите название города
                            <input type="text" className={styles.BaseForm__inputCity} placeholder="Введите название города" />
                        </label>
                        <div className={styles.BaseForm__text}>
                            Вероятность осадков: 
                            <span>2%</span>
                        </div>
                        <div className={styles.BaseForm__text}>
                            Влажность: 
                            <span>84$</span>
                        </div>
                        <div className={styles.BaseForm__text}>
                            Ветер: 
                            <span>11км/ч</span>
                        </div>
                    </div>
                </div>
            </div>
            <BaseDaysWeather />
        </div>
    )
};

export default BaseForm;