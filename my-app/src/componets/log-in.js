import React, { useState } from 'react'
import carImage from '../assets/images/pexels-valeriya-1199960.jpg';

const UserForm = () =>{

    const [isLoggedIn, setIsLogedIn] = useState(false)

    const LogIn = () =>{
        setIsLogedIn(true)
    }

    const SignIn = () =>{
        setIsLogedIn(false)
    }

    return(
        <div style={{
            backgroundImage: `url(${carImage})`,
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className="car">
            <div className='box-1'>

                    <div className='title'>
                        <button className='button' onClick={LogIn}><h1 className='h1'>log-in </h1></button>
                        <h1 className='h1'>/</h1>
                        <button className='button' onClick={SignIn}><h1 className='h1'>sign in</h1></button>
                    </div>

                <form className='form'>

                    <div className='main-div'>
                        <br/>

                        {!isLoggedIn &&(
                            <div className='div'>
                                <label for='email'>Email</label>
                                <br/>
                                <input type='email' className='input' id='email' placeholder='Enter your Email' required/>
                            </div>
                        )}

                        <br/>

                        <div className='div'>
                            <label for='name'>User name</label>
                            <br/>
                            <input type='text' className='input' id='name' placeholder='Enter your  nick-name' required/>
                        </div>

                        <br/>

                        <div className='div'>
                            <label>Password</label>
                            <br/>
                            <input type='password' className='input' id='pass' placeholder='Enter your password' required maxLength='15'/>
                        </div>

                        {!isLoggedIn &&(
                            <div className='buttons'>
                                <a href='/'  target='blank' title='next page'>
                                    <button className='enter'>sign up</button>
                                </a>
                                <input type='reset' className='reset'/> 
                            </div>
                        )}

                        {isLoggedIn &&(
                            <div className='buttons'>
                                <button className='enter'>log-in</button>
                                <input type='reset' className='reset'/>
                            </div>
                        )}
                    
                    </div>


                </form>
            </div>
        </div>
    )
}

export default UserForm