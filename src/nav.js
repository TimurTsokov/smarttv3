import React from 'react'
import ReactTV from 'react-tv'
import { withFocusable, withNavigation } from 'react-tv-navigation'

const Item = ({focused, setFocus, focusPath}) => {
    focused = (focused) ? 'focused' : 'unfocused'
    return (
        <div onClick={() => { setFocus() }} >
            It's {focused} Item
        </div>
    )
};

const Button = ({setFocus}) => {
    return (
        <div onClick={() => { setFocus('item-1') }}>
            Back To First Item!
        </div>
    )
};

const FocusableItem = withFocusable(Item)
const FocusableButton = withFocusable(Button)

function App({currentFocusPath}) {
    return (
        <div>
            <h1>Current FocusPath: '{currentFocusPath}'</h1>,
            <FocusableItem focusPath='item-1'/>
            <FocusableItem focusPath='item-2'/>
            <FocusableButton
                focusPath='button'
                onEnterPress={() => console.log('Pressed enter on Button!')}/>
        </div>
    )
}

const NavigableApp = withNavigation(App);

ReactTV.render(<NavigableApp/>, document.querySelector('#app'));