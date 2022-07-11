import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion'
import Button from './elements/Button';
import Input from './elements/Input';

interface Props {
	setShowLogin: React.Dispatch<React.SetStateAction<boolean>>
} 

const Login: React.FC<Props> = (props) => {
	
	const [register, setRegister] = useState(false);

	let usernameValue = '';
	let passwordValue = '';
	let emailValue = '';

	useEffect(() => {
		usernameValue = '';
		passwordValue = '';
		emailValue = '';
	}, [register])

	const handleLogin = () => {
		props.setShowLogin(false)
	}

	const handleRegister = () => {

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
					{!register && <AnimatePresence>
							<motion.div className='Flex CenterX CenterY'
							initial={{opacity:0}}
							animate={{opacity:1}}
							exit={{opacity:0}}>
							<h1 className='Title'>Login</h1>
							<br/>
							<Input placeholder='Username' 
								//@ts-ignore
								onChange={(e) => {usernameValue = e.currentTarget.value}}/>
							<br/>
							<Input placeholder='Password' isPassword
								//@ts-ignore
								onChange={(e) => {passwordValue = e.currentTarget.value}}/>
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
								onChange={(e) => {usernameValue = e.currentTarget.value}}/>
							<br/>
							<Input placeholder='Email' isEmail
								//@ts-ignore
								onChange={(e) => {emailValue = e.currentTarget.value}}/>
							<br/>
							<Input placeholder='Password' isPassword
								//@ts-ignore
								onChange={(e) => {passwordValue = e.currentTarget.value}}/>
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
