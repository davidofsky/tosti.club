import React, {useEffect, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import './styles/app.css';
import StartScreen from './compontents/StartScreen';
import Login from './compontents/Login';
import Home from './compontents/Home';

const App: React.FC = () => {
	const [showStartScreen, setShowStartScreen] = useState(true);
	const [showLoginScreen, setShowLoginScreen] = useState(false);


	useEffect(() => {
		if(showStartScreen === false) {
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
					animate={{translateX: 0}}
					transition={{delay: .5}}>
						<Home/>
					</motion.div>
				}
			</div>
  );
}

export default App;
