import React from'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}
// const reactElement={
//     type:"a",
//     props:{
//         href:"https://google.com",
//         target:"_blank"
//     },
//     children:"click me to visit google"
// }
const anotherUser=" yes hello"

const reactElement=React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me to visit google',
    anotherUser
)
const anotherElement=(
    <a href="https://google.com" target='_blank'>Visit google</a>
  
)
createRoot(document.getElementById('root')).render(
    /* <MyApp /> // if you want then written " MyApp()" also it works properly */
    // anotherElement  //because it is a object that's why we have not same syntax
   reactElement
//  <App/>
)
