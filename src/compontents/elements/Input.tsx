import React, {ChangeEvent, ChangeEventHandler, KeyboardEventHandler} from 'react';
import {motion} from 'framer-motion/dist/framer-motion';

interface Props {
	placeholder?: string
	isEmail?: boolean
	isPassword?: boolean
	onChange?: ChangeEventHandler
}

const Button: React.FC<Props> = (props) => {
  return (
		<motion.input 
			whileHover={{scale: 1.1}}
			whileFocus={{scale: 1.1, background: 'white', 
					color: 'black', borderRadius: '.5em', borderColor: 'black'}}

			placeholder={props.placeholder || ''}

			type={
				props.isPassword? 'password' 
				: props.isEmail? 'email' 
				: 'text'
			}

			onChange={(e) => props.onChange? props.onChange(e) : {}}
		/> 
  );
}

export default Button;
