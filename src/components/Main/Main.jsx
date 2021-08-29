import React from 'react'
import c from './Main.module.scss'
import MyInput from '../UI/input/MyInput'
import tractor from '../../Icons/tractor.svg'
import i2 from '../../Icons/harvest.svg'
import i3 from '../../Icons/farmer.svg'
import i4 from '../../Icons/celebration.svg'
import i5 from '../../Icons/shipment.svg'
export default function Main() {
    return (
        <div className={c.main}>
            <div className={c.main_input}>
                <MyInput/>
            </div>
             <div className={c.main_categories}>
                <div className={c.box}>
                        <div className={c.box_img}>
                            <img src={tractor} alt="" />
                        </div>
                        <div className={c.box_text}>Тракторы</div>
                </div>
                <div className={c.box}>
                        <div className={c.box_img}>
                            <img src={i2} alt="" />
                        </div>
                        <div className={c.box_text}>Питаки</div>
                </div>
                <div className={c.box}>
                        <div className={c.box_img}>
                            <img src={i3} alt="" />
                        </div>
                        <div className={c.box_text}>Работник</div>
                </div>
                <div className={c.box}>
                        <div className={c.box_img}>
                            <img src={i5} alt="" />
                        </div>
                        <div className={c.box_text}>Дальнабойщики</div>
                </div>
                <div className={c.box}>
                        <div className={c.box_img}>
                            <img src={i4} alt="" />
                        </div>
                        <div className={c.box_text}>Торжество</div>
                </div>
             </div>
        </div>
    )
}
