import { render } from 'preact'
import { App } from './app.jsx'
import { Route , BrowserRouter , Routes} from 'react-router-dom'
import SignIn from './sign-in.jsx' 
import './index.css'

render(
    
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
    </Routes>
    </BrowserRouter>

, document.getElementById('app'))
