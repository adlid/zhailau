import React from 'react'
import c from './MyInput.module.scss';
import { Input } from 'antd';

const { Search } = Input;
export default function MyInput(props) {
    return (
       
        <Search placeholder="Пойск " onSearch={value => console.log(value)} enterButton />
        
    )
}
