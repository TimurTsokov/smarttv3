import React from 'react';
// import ReactTV from 'react-tv';
import {withFocusable, withNavigation} from 'react-tv-navigation';

import './css/phone.css';

const Button = ({i, setFocus, focusPath}) => {
    return (
        <div className="button" onClick={() => { console.log({i}) }}>
Активировать
        </div>
    )
};
const FocusableButton = withFocusable(Button);

function App() {
    return (
        <div className="phone__number">
            <FocusableButton
                focusPath='button'
                onEnterPress={() => console.log('Pressed enter on Button!')}/>
            </div>
        // <div className="phone">
        //     <ul className="phone__list">
        //
        //     </ul>
        //     <div className="phone__number">
        //         <span className="input" data-input-name="phone">__ - ___ - __ - __</span>
        //
        //     </div>
        // </div>
    )
}
const Phone = withNavigation(App);

export default Phone;
