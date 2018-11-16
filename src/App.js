import React, {Component} from 'react';
import Logo from './img/logo.svg';
import './App.css';
import Keyboard from './Components/keyboard'
import Phone from './Components/phone'
import {withFocusable, withNavigation} from 'react-tv-navigation';

const Li = ({i, setFocus, focusPath}) => {
    return (
        <li>
            {i}
        </li>
    )
};
const LiActive = ({i, setFocus, focusPath}) => {
    return (
        <li className="active">
            {i}
        </li>
    )
};

const Item = ({focused, setFocus, focusPath}) => {
    focused = (focused) ? 'focused' : 'unfocused';
    return (
        <li onClick={() => { setFocus() }} >

        </li>
    )
}

const FocusableLi = withFocusable(Li);
const FocusableLiActive = withFocusable(LiActive);


class App extends Component {
    state = {
        //active: false
        codes: [
            { marked: false, code: "UA", id: 1, name: "Украина", telephone_code: 380},
            { marked: false, code: "RU", id: 2, name: "Россия", telephone_code: 7},
            { marked: false, code: "AZ", id: 3, name: "Азербайджан", telephone_code: 994},
            { marked: false, code: "AM", id: 4, name: "Армения", telephone_code: 374},
            { marked: false, code: "BY", id: 5, name: "Белоруссия", telephone_code: 375},
        ]
    };

     addClassActive(props) {
        const classes = ['phone__list'];
        if (props.code.marked){
            classes.push('active');
        }
    }
    // ul = document.querySelector('phone__list')[0];
    // li = document.querySelector('phone__list')[0].children;

     render() {
        const codes = this.state.codes.map(code => {
            console.log(code.telephone_code)
            return (
                <FocusableLi i={code.telephone_code} focusPath={'li' + code.id}/>
            )
        });

        return (
            <div className="App">
                <div className="container">
                    <img src={Logo} className="sweet-logo" alt="logo"/>
                    <div className="content">
                        <h1 className="content__title">введите свой номер телефона для подключения</h1>
                        <div className="content__reg">
                            {/*<Phone*/}
                                {/*onActive={this.addClassActive().bind(this, code.name)}/>*/}
                            <div className="phone">
                                <ul className="phone__list">
                                    {codes}
                                </ul>
                                <div className="phone__number">
                                    <span className="input" data-input-name="phone">__ - ___ - __ - __</span>
                                    {/*<div className="button">Активировать</div>*/}
                                    <Phone/>
                                </div>
                            </div>

                            <Keyboard/>
                        </div>
                       <div className="content__info">
                           <h3>Если у вас возникли вопросы:</h3>
                           <p><b>2121</b> (бесплатно для Украины)<br/> <b>info@sweet.tv</b> </p>
                       </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
