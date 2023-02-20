import classNames from 'classnames'
import { useState } from 'react'
import styles from './index.module.css'

export function ListItem({ question, answer}){
    const [open, setOpen] = useState(false)

    return(
        <div className={styles['list-item']}>
            <div>
                <div className={styles['question']}>{question}</div>
                <div className={classNames(styles['answer'], open ? styles['open'] : '')}>{answer}</div>
            </div>
            <div className={styles['trigger']}>
                <img 
                    src={open ? "/Ellipse 243.png" : "/Ellipse 243 (1).png"} 
                    alt="close" 
                    onClick={() => setOpen(e => !e)}
                />
            </div>
        </div>
    )
}