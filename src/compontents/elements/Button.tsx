import React, {MouseEventHandler} from 'react';
import {motion} from 'framer-motion/dist/framer-motion';

interface Props {
	Text: string
	OnClick?: MouseEventHandler
}

const Button: React.FC<Props> = (props) => {
  return (
		<motion.button 
			whileHover={{scale: 1.15}}
			whileFocus={{scale: 1.15, border: '1px solid black',boxShadow: '0px 0px 0px 1px white'}}
			whileTap={{scale:1}}
			onMouseLeave={(e) => {e.currentTarget.blur()}}
			onClick={(e) =>  props.OnClick? props.OnClick(e) : {}}>
			{props.Text}
		</motion.button>
  );
}

export default Button;
