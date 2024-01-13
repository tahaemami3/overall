import { Link } from 'react-router-dom';
import './app.css'
import Item  from './item.jsx'

function SignIn() {

  return (
    <>
    <div className='bigofbigs'>
    <section className='nigga-box'>
      <nav className='navbar'>
        <h2>Overall Information</h2>
        <img src='../public/three-dots.png' alt=""></img>
      </nav>
      <div className='numbers-div'> 
        <h1 className='number1'>57</h1>
        <h1 className='number2'>124</h1>
        <span className='text-number'>tasks done</span>
      </div>
      <header>
        <Item location='../public/icon1.png' number='28' text='Projects' color='#e2ea46'/>
        <Item location='../public/icon2.svg' number='17' text='In progreos' color='#36bbb9'/>
        <Item location='../public/icon3.svg' number='11' text='Comoleted' color='#f45506'/>
      </header>
    </section>
    </div>
    </>
  )
}

export default SignIn;