import React, {useEffect, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion/dist/framer-motion';
import './styles/app.css';
import StartScreen from './compontents/StartScreen';
import Login from './compontents/Login';
import Home from './compontents/Home';
import JWT from 'jsonwebtoken'; 
import { useCookies } from 'react-cookie';
require('dotenv').config();

const App: React.FC = () => {
	const [showStartScreen, setShowStartScreen] = useState(true);
	const [showLoginScreen, setShowLoginScreen] = useState(false);


	const [cookies] = useCookies(['JWT'])


	useEffect(() => {
		if(showStartScreen === false) {
			const secretKey = process.env.REACT_APP_JWT
			if(cookies.JWT && secretKey) {
				try{
					JWT.verify(cookies.JWT, secretKey)
					return;
				} catch {
					//dont do anything
				}
			}
			setShowLoginScreen(true)
		}
	}, [showStartScreen])


  return (
	<div className="App">
		<AnimatePresence>
			{showStartScreen &&
				<StartScreen setShowStartProp={setShowStartScreen}/>
			}
		</AnimatePresence>
		<AnimatePresence>
			{showLoginScreen &&
				<Login setShowLogin={setShowLoginScreen}/>
			}
		</AnimatePresence>

		{!showLoginScreen && !showStartScreen &&
			<motion.div 
			initial={{translateX: '100vw'}}
			animate={{translateX: 0, translateY: 0}}
			transition={{delay: .5, duration: .3, bounce: 1, damping: 0}}>
				<Home/>
			</motion.div>
		}
	</div>
  );
}

export default App;
