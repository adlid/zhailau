import React from 'react'
import { ContainerLayout } from '../../Styles/Layouts'
import MyInput from '../UI/input/MyInput'
import c from './Header.module.scss'
export default function Header() {
    return (
        
             <div className={c.header}>
                 <ContainerLayout>
                    <div className={c.header_top}>
                        <div className={c.header_logo}>
                            Logo
                        </div>
                        <div className={c.header_items}>
                            <button className={c.btn}>
                                Подать объявление
                            </button>
                            <button className={c.btn}>
                                Almaty
                            </button>
                            <button disabled className={c.btn}>
                                User
                            </button>
                        </div>     
                    </div>
                </ContainerLayout>      
            </div>
       
       
    )
}
