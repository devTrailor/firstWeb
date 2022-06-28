import { Input, Select, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { Option } from 'antd/lib/mentions';


import React from 'react'
import UserConatctCard from '../UserContactcard/UserConatctCard';
// Styles
import "./style.scss"


const UserMap = () => {

    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div className='user-info'>
            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28005.33835668678!2d77.04713141555898!3d28.669679027986035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0438728d3fc9%3A0x64e1eebb4ec4e142!2sNangloi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1647247716389!5m2!1sen!2sin" ></iframe>
            </div>

            <div className="connect_form">

                <form onSubmit={submitHandler}>
                    <h2 className="title2">Get In Touch</h2>
                    <Input placeholder='Your email' />
                    <Select defaultValue="Subjects">
                        <Select.Option>1</Select.Option>
                        <Select.Option>2</Select.Option>
                        <Select.Option>3</Select.Option>
                        <Select.Option>4</Select.Option>
                    </Select>
                    <TextArea style={{ height: "150px" }}>fhhfs</TextArea>
                    <Button type="submit">Submit Now</Button>


                </form>





            </div>
        </div>
    )
}

export default UserMap