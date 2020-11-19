import React, { useEffect, useState } from 'react';
import styles from './BaseDaysWeather.module.scss';

type BaseDaysWeatherProps = {
    list: Array<any>,
}

const BaseDaysWeather: React.FC<BaseDaysWeatherProps> = ({ list }) => {


    const [date, setDate] = useState<any>({
        f: 'Дата',
        s: 'Дата',
        t: 'Дата',
    });

    useEffect(() => {
        window.navigator.language === 'ru-RU' ? setDate({
            f: 'Дата',
            s: 'Дата',
            t: 'Дата',
        }) : setDate({
            f: 'Date',
            s: 'Date',
            t: 'Date',
        })
    }, []);

    const [temp, setTemp] = useState<any>({
        f: 0,
        s: 0,
        t: 0,
    });

    useEffect(() => {
        if (list.length > 1) {
            setDate({
                f: list[9].dt_txt,
                s: list[10].dt_txt,
                t: list[11].dt_txt,
            });
            setTemp({
                f: list[9].main.temp,
                s: list[10].main.temp,
                t: list[11].main.temp,
            });
            
        };
    }, [list]);
    return (
            <div className={styles.BaseDaysWeather}>
                <div className={styles.BaseDaysWeather__item}>
                    <div className={styles.BaseDaysWeather__day}>{date.f}</div>
                    <div className={styles.BaseDaysWeather__day}>{Math.round(temp.f)} 
                        <sup>℃</sup>
                    </div>
                </div>
                <div className={styles.BaseDaysWeather__item}>
                    <div className={styles.BaseDaysWeather__day}>{date.s}</div>
                    <div className={styles.BaseDaysWeather__day}>{Math.round(temp.s)} 
                        <sup>℃</sup>
                    </div>
                </div>
                <div className={styles.BaseDaysWeather__item}>
                    <div className={styles.BaseDaysWeather__day}>{date.t}</div>
                    <div className={styles.BaseDaysWeather__day}>{Math.round(temp.t)} 
                        <sup>℃</sup>
                    </div>
                </div>
            </div>
    )
}

export default BaseDaysWeather;