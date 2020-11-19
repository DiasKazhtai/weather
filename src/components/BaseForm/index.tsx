import React, { useEffect, useState } from 'react';
import styles from './BaseForm.module.scss';
import BaseDaysWeather from '../BaseDaysWeather';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { change } from '../../store/actions/index';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

interface RootState {
    weather: any;
    name: any,
    list: Array<any>,
    temp: any,
  }
const BaseForm: React.FC = () => {
  const dispatch = useDispatch();
  const { name, list } = useSelector((state: RootState) => ({
    name: state.weather.name,
    list: state.weather.list,
  }));
  
  const APIkey = '42e9636106b9f15d87ada58ad9bdaa12';

  const [cityName, setCityName] = useState<string>('London');

  const inputChangleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(event.target.value);
  };

  const gettingWeather = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      try {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&lang=ru&units=metric&APPID=${APIkey}`)
        .then((response) => response.json())
        .then(data => {
            const name = data.city.name;
            const list = data.list;
            const time = Date.now();
            const temp = data.list[0].main.temp;
            const history = {
                name,
                time,
                temp,
            }
            dispatch(change(name, list, time, temp, history))
        })
    } catch {
        console.log('такого города не существует');
    };
    }
  };

  const [currentDate, setCurrentDate] = useState<string>('currentDate');


  const  getDate = () => {
    const UNIX_timestamp = 1605776400;
    const a = new Date(UNIX_timestamp * 1000);
    let months = [];
    window.navigator.language === 'ru-RU' ? months = ['Янв','Фев','Мар','Апр','Май','Июнь','Июль','Авг','Сен','Окт','Нояб','Дек']
    : months = ['Янв','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const time = date + ' ' + month + ' ' + year;
    setCurrentDate(time)
  };
  useEffect(() => {
      getDate();
  }, []);

  let cities = [
    { title: 'Астана'},
    { title: 'Лондон'},
    { title: 'Киев'},
    { title: 'Париж'},
    { title: 'Москва'},
    { title: 'Стамбул'},
    { title: 'Прага'},
    { title: 'Краснодар'},
    { title: 'Prague'},
    { title: 'Dublin'},
    { title: 'Костанай'},
    { title: 'Рудный'},
    { title: 'Берлин'},
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  window.navigator.language === 'ru-RU' ? cities = [
    { title: 'Астана'},
    { title: 'Лондон'},
    { title: 'Киев'},
    { title: 'Париж'},
    { title: 'Москва'},
    { title: 'Стамбул'},
    { title: 'Прага'},
    { title: 'Краснодар'},
    { title: 'Prague'},
    { title: 'Dublin'},
    { title: 'Костанай'},
    { title: 'Рудный'},
    { title: 'Берлин'},
  ] : [
    { title: 'Astana'},
    { title: 'London'},
    { title: 'Kiev'},
    { title: 'Paris'},
    { title: 'Moscow'},
    { title: 'Istanbul'},
    { title: 'Prague'},
    { title: 'Prague'},
    { title: 'Prague'},
    { title: 'Dublin'},
    { title: 'Kostanay'},
    { title: 'New York'},
    { title: 'Berlin'},
  ];
  const [langText, setLangText] = useState({
    back: 'Назад',
    cityName: 'введите название города',
    history: 'История',
})
  
  useEffect(() => {
    window.navigator.language === 'ru-RU' ? setLangText({
        back: 'Назад',
        cityName: 'введите название города',
        history: 'История',
    }) : setLangText({
        back: 'back',
        cityName: 'take city name',
        history: 'History',
    })
}, [])

    return (
        <div className={styles.BaseForm}>
            <Link to="/history" className={styles.BaseForm__history}>{langText.history}</Link>
            <div className={styles.BaseForm__wrap}>
                <div className={styles.BaseForm__cityName}>{name}</div>
                <div className={styles.BaseForm__cityName}>{currentDate}</div>
                <div className={styles.BaseForm__text}>{currentDate}</div>
                <div className={styles.BaseForm__currentDayInfo}>
                    <div className={styles.BaseForm__temperature}>
                    <div>{Math.round(list[0].main.temp)} <sup>℃</sup></div>
                    </div>
                    <div className={styles.moreInfo}>
                        <label>
                            {langText.cityName}
                            <Autocomplete
                              id="combo-box-demo"
                              options={cities}
                              getOptionLabel={(option) => option.title}
                              style={{ width: 300, marginTop: 20 }}
                              renderInput={(params) => <TextField onChange={inputChangleHandler} onKeyPress={gettingWeather}
                               {...params}
                               label="Combo box"
                                variant="outlined" />}
                          />
                        </label>
                    </div>
                </div>
            </div>
            <BaseDaysWeather list={list}/>
        </div>
    )
};

export default BaseForm;