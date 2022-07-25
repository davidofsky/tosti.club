import React, {MouseEventHandler} from 'react';
import {motion} from 'framer-motion/dist/framer-motion';

interface Props {
	Text: string
	ItemNumber: number
	selectedItemNumber: number
	OnClick?: MouseEventHandler
}

const Button: React.FC<Props> = (props) => {
  return (
		<motion.button 
			className='HomeHeaderItem'
			whileHover={{scale: 1.15}}
			whileFocus={{scale: 1.15}}
			onMouseLeave={(e) => {e.currentTarget.blur()}}
			whileTap={{scale:1}}
			style={{
				background: (props.ItemNumber === props.selectedItemNumber)? 
					'white': 'none',
				color: (props.ItemNumber === props.selectedItemNumber)? 
					'black': 'white'
			}}
			onClick={(e) =>  props.OnClick? props.OnClick(e) : {}}>
			{props.Text}
		</motion.button>
  );
}

export default Button;
