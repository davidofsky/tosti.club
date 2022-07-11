import React, {useEffect, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';


type Props = {
	pageNumber: number
	selectedPageNumber: number 
	children?: React.ReactElement
}


const PageWrapper: React.FC<Props> = (props) => {
	const [previousPage, setPreviousPage] = useState(1);

	useEffect(() => {
		setPreviousPage(props.selectedPageNumber)
	}, [props.selectedPageNumber])

	return (
		<AnimatePresence>
			{props.selectedPageNumber === props.pageNumber &&
			<motion.div 
				style={{position: 'fixed', width: '100vw'}}
				initial={{
					translateX:	'100vw'
				}}
				animate={{translateX: 0}}
				exit={{
					translateX: '-100vw'
				}}
				transition={{duration: .3}}
			>
				{props.children}
			</motion.div>
			}
		</AnimatePresence>
	)
}

export default PageWrapper;
