import React from 'react';
import {motion} from 'framer-motion/dist/framer-motion'

interface Props {
	setShowStartProp: React.Dispatch<React.SetStateAction<boolean>>
}

const StartScreen:React.FC<Props> = (props) => {

	document.addEventListener("keydown", ()=>{
		props.setShowStartProp(false)
	})

	return (
		<motion.div className='Flex CenterX CenterY'
			onClick={() => {
				props.setShowStartProp(false)
			}}
			exit={{translateY: '-100vh', opacity: 0}}
			transition={{duration: 1}}
		style={{
			background:'black',
			position: 'fixed',
			width:'100vw',
			height:'100vh',
			zIndex: 16777271,
		}}>
			<div 
				style={{
					height: 'min-content',
				}}	
			>
				<div style={{
					display: 'flex', 
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					position:'relative',
					padding: '100px',
					fontSize: '200%',
				}}>

					<h1 className='Title' style={{color:'#FFCD4C'}}>
						Tosti
					</h1>
					<motion.h2 className='Title'
						initial={{scaleX: 0, translateX: '-50%', translateY: '10%'}} 
						animate={{scaleX: 1, translateX: '5%'}}
						transition={{duration: .5, delay: .5}}>
						club
					</motion.h2>
				</div>

				<div style={{position: 'relative', top: '-20%',display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
					<motion.h5 className='Title' style={{color:'#7e7e7e'}}
						 animate={{ opacity: [0,1,0] }}
						transition={{
							delay: 1.5,
								opacity: { type: "spring", stiffness: 100, repeat: Infinity, duration: 3 },
								default: { duration: 100 },
						}}
					>
						Press any key to continue
					</motion.h5>
			</div>
			</div>
		</motion.div>
	)
}

export default StartScreen;
