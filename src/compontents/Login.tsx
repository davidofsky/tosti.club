import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import { useCookies } from 'react-cookie';
import Button from './elements/Button';
import Input from './elements/Input';
import Modal from './Modal';

interface Props {
	setShowLogin: React.Dispatch<React.SetStateAction<boolean>>
} 

const Login: React.FC<Props> = (props) => {
	
	const [register, setRegister] = useState(false);

	const [showMessage, setShowMessage] = useState(false);
	const [message, setMessage] = useState('');

	const [usernameValue, setUsernameValue] = useState('')
	const [emailValue, setEmailValue] = useState('')
	const [passwordValue, setPasswordValue] = useState('')

	const [_cookies, setCookies] = useCookies(['JWT'])

	useEffect(() => {
		setUsernameValue('')
		setPasswordValue('')
		setEmailValue('')
	}, [register])

	const handleLogin = () => {
		if(usernameValue.length < 3) {
			setMessage('Your username is too short.')
			setShowMessage(true);
			return;
		}
		if(!passwordValue.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)) {
			setMessage('Please choose a more secure password.')
			setShowMessage(true);
			return;
		}

		if(process.env.REACT_APP_API_URL && process.env.REACT_APP_API_KEY) {
			fetch(`${process.env.REACT_APP_API_URL}/v1/login`, {
				method: 'GET', 
				headers: {
					"Access-Control-Allow-Headers": "X-Requested-With",
					"Content-Type": 'application/json',
					"Authorization": `API-Key ${process.env.REACT_APP_API_KEY}`,
					"username": usernameValue,
					"password": passwordValue
				}
			})
			.then(response => response.json())
			.then((result) => {
				if(!result.errors) {
					setCookies('JWT', result.result)
					props.setShowLogin(false)
				}
				if(result.message) {
					setMessage(result.message)
					setShowMessage(true)
				}
			})
			.catch((err) => {
				setMessage('Sorry, something went wrong')
				setShowMessage(true)
			})
		}
	}

	const handleRegister = () => {
		if(usernameValue.length < 3) {
			setMessage('Your username is too short.')
			setShowMessage(true);
			return;
		}
		if(!emailValue.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
			setMessage('Please fill in a valid email address.')
			setShowMessage(true);
			return;
		}
		if(!passwordValue.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)) {
			setMessage('Please choose a more secure password.')
			setShowMessage(true);
			return;
		}

		if(process.env.REACT_APP_API_URL && process.env.REACT_APP_API_KEY) {
			fetch(`${process.env.REACT_APP_API_URL}/v1/users`, {
				method: 'POST', 
				headers: {
					"Access-Control-Allow-Headers": "X-Requested-With",
					"Content-Type": 'application/json',
					"Authorization": `API-Key ${process.env.REACT_APP_API_KEY}`
				},
				body: JSON.stringify({
					username: usernameValue,
					email: emailValue,
					password: passwordValue
				})
			})
			.then(response => response.json())
			.then((result) => {
				if(!result.errors) {
					setRegister(false)
				}
				if(result.message) {
					setMessage(result.message)
					setShowMessage(true)
				}
			})
			.catch((err) => {
				console.log(err)
				setMessage('Sorry, something went wrong')
				setShowMessage(true)
			})
		}
	}

  return (
		<motion.div className={"Flex CenterX CenterY Horizontal"}
			initial={{translateY: '100vh', opacity: 0}}
			animate={{translateY: 0, opacity: 1}}
			exit={{translateX: '-100vw', opacity: 0}}
			transition={{duration: 1}}
			style={{
				background:'black',
				position: 'fixed',
				width:'100vw',
				height:'100vh',
				zIndex: 16777271,
			}}>
				<Modal visible={showMessage} setVisible={setShowMessage} message={message}/>
					{!register && <AnimatePresence>
							<motion.div className='Flex CenterX CenterY'
							initial={{opacity:0}}
							animate={{opacity:1}}
							exit={{opacity:0}}>
							<h1 className='Title'>Login</h1>
							<br/>
							<Input placeholder='Username' 
								//@ts-ignore
								onChange={(e) => {setUsernameValue(e.currentTarget.value)}}/>
							<br/>
							<Input placeholder='Password' isPassword
								//@ts-ignore
								onChange={(e) => {setPasswordValue(e.currentTarget.value)}}/>
							<br/>
							<Button Text='Login' OnClick={() => {handleLogin()}}/>
							<h6 style={{color: '#8e8e8e'}}>{"Don't have an account? "}
								<a onClick={() => {setRegister(true)}}>Register</a></h6>
						</motion.div>
					</AnimatePresence>}
					{register && <AnimatePresence>
						<motion.div className='Flex CenterX CenterY'
							initial={{opacity:0}}
							animate={{opacity:1}}
							exit={{opacity:0}}>
							<h1 className='Title'>Register</h1>
							<br/>
							<Input placeholder='Username' 
								//@ts-ignore
								onChange={(e) => {setUsernameValue(e.currentTarget.value)}}/>
							<br/>
							<Input placeholder='Email' isEmail
								//@ts-ignore
								onChange={(e) => {setEmailValue(e.currentTarget.value)}}/>
							<br/>
							<Input placeholder='Password' isPassword
								//@ts-ignore
								onChange={(e) => {setPasswordValue(e.currentTarget.value)}}/>
							<br/>
							<Button Text='Register' OnClick={() => {handleRegister()}}/>
							<h6 style={{color: '#8e8e8e'}}>{"Already have an account? "}
								<a onClick={() => {setRegister(false)}}>Login</a></h6>
						</motion.div>
					</AnimatePresence>}
		</motion.div>
  );
}

export default Login;
