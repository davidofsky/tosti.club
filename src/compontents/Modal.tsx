import React from 'react'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

interface Props {
    visible?: boolean
    setVisible?: React.Dispatch<React.SetStateAction<boolean>>
    message?: string
}


const Modal: React.FC<Props> = (props) => {
  return (
    <AnimatePresence>
    {props.visible &&
        <motion.div style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            top: 0, left: 0,
            margin: 0, padding: 0,
            zIndex: 16777270,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0, 0, 0, 0.5)'
        }} onClick={() => {if(props.setVisible) props.setVisible(false) }}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
            <motion.div style={{
                border: '2px solid #FFCD4C',
                minWidth: '30%',
                minHeight: '30%',
                padding: '1em',
                borderRadius: '1em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'black'
            }}
            initial={{scale: 0}}
            animate={{scale: 1}}
            exit={{scale: 0}}>
                <h2>{props.message}</h2>
            </motion.div>
        </motion.div>
    }
    </AnimatePresence>
  )
}


export default Modal