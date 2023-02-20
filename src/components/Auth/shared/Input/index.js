import { useState } from 'react';
import styles from './index.module.css';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import classNames from 'classnames';

// type = 'text', 'password', 'phoneNumber'

export function Input({ type = 'text', value, onChange = () => {}, disabled = false, placeholder, className }){
    const [hidePassword, setHidePassword] = useState(true)

    return(
        <div className={classNames(styles['input-wrapper'], className)}>
            {
                type === 'phoneNumber' &&
                <div className={styles['phone-number']}>
                    <img src='/nigerian-flag.png' alt='Nigerian Flag'/>
                    <span>+234</span>
                </div> 
            }

            <input
                onChange={e => onChange(e.target.value)}
                value={value}
                disabled={disabled}
                placeholder={placeholder}
                type={ (type === 'password' && hidePassword)  ? 'password' : 'text'}
                className={ classNames(styles['input'],type === 'phoneNumber' ? styles['phone-number-active'] : '')}
            />

            {
                type === 'password' &&
                <>
                    {
                        hidePassword ?
                        <AiFillEye className={styles['eye-icon']} onClick={() => setHidePassword(h => !h)}/>
                        :
                        <AiFillEyeInvisible className={styles['eye-icon']} onClick={() => setHidePassword(h => !h)}/>
                    }
                </>
            }
        </div>
    )
}