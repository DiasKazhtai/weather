import React, { useEffect, useState } from 'react';
import styles from './History.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface RootState {
    state: any;
    weather: any;
  }


const History: React.FC = () => {

    const { history } = useSelector((state: RootState) => ({
        history: state.weather.history,
      }));

    const [_, setTest] = useState('');

      const  getDate = (times: any) => {
        const UNIX_timestamp = times;
        const a = new Date(UNIX_timestamp * 1000);
        // const months = ['Янв','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const months = ['Янв','Фев','Мар','Апр','Май','Июнь','Июль','Авг','Сен','Окт','Нояб','Дек'];
        const month = months[a.getMonth()];
        const date = a.getDate();
        const hour = a.getHours();
        const min = a.getMinutes();
        const time = date + ' ' + month + ' ' + hour + ': ' + min;
        return time;
      };

      const localHistory = history;

      useEffect(() => {
          if (history.lenght >= 10) {
            localHistory.shift();
          }
      }, [history, localHistory]);

    const [langText, setLangText] = useState({
        back: 'Назад',
        old: 'Старые',
        city: 'Город',
        temp: 'Температура',
        time: 'время',
    });

    useEffect(() => {
        window.navigator.language === 'ru-RU' ? setLangText({
            back: 'Назад',
            old: 'Старые',
            city: 'Город',
            temp: 'Температура',
            time: 'время',
        }) : setLangText({
            back: 'back',
            old: 'old',
            city: 'city',
            temp: 'temp',
            time: 'time',
        })
    }, [])

    const newHandler = (arr: Array<any>) => {
        arr.sort((a, b) => a.time > b.time ? 1 : -1);
        setTest('');
        console.log(arr);
    }

    const oldandler = (arr: Array<any>) => {
        arr.sort((a, b) => a.time < b.time ? 1 : -1);
        setTest('');
        console.log(arr);

    }
    return (
        <div className={styles.History}>
            <Link to="/" className={styles.History__link}>{langText.back}</Link>
            <div className={styles.History__sort}>
                <button className="btn btn-primary" onClick={() => newHandler(localHistory)}>Сначала новые</button>
                <button className="btn btn-primary" onClick={() => oldandler(localHistory)}>Сначала старые</button>
            </div>
            <div className={styles.History__sort}>
            </div>
            {localHistory.map((el: any, index: number) => {
                return (
                    <div className={styles.History__item} key={el.time}>
                        <div className={styles.History__text}>{index}</div>
                        <div className={styles.History__text}>{langText.city} {history[index].name}</div>
                        <div className={styles.History__text}>{langText.temp} {Math.round(history[index].temp)}</div>
                        <div className={styles.History__text}>{langText.time} {getDate(history[index].time)}</div>
                    </div>
                )
            })}
        </div>
    )
};

export default History;
