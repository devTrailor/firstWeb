import React from 'react'
import "./style.scss"

const OurAwards = () => {
    return (
        <div className='container our_awards'>
            <h5 className='title2'>Our Awards</h5>

            <div className="award_items">


                <div className='award_item item_1'>

                    <div className="award_present">
                        <img src={require("../../assets/imags/pic1.png")} alt="" />
                        <p className="description">SOFA</p>
                    </div>
                    <div className="time">
                        <p className='description'>19 Oct, 2021</p>
                    </div>
                    <div className="award_symbol">
                        <p className="description">
                            Awwwards
                        </p>
                        <img src={require("../../assets/imags/avatar1.png")} alt="" />
                    </div>

                </div>
                <div className='award_item item_2'>

                    <div className="award_present">
                        <img src={require("../../assets/imags/pic1.png")} alt="" />
                        <p className="description">SOFA</p>
                    </div>
                    <div className="time">
                        <p className='description'>7 Oct, 2021</p>
                    </div>
                    <div className="award_symbol">
                        <p className="description">
                            CSS Design Awards
                        </p>
                        <img src={require("../../assets/imags/avatar1.png")} alt="" />
                    </div>

                </div>
                <div className='award_item item_3'>

                    <div className="award_present">
                        <img src={require("../../assets/imags/pic1.png")} alt="" />
                        <p className="description">SOFA</p>
                    </div>
                    <div className="time">
                        <p className='description'>7 Oct, 2021</p>
                    </div>
                    <div className="award_symbol">
                        <p className="description">
                            The FWA
                        </p>
                        <img src={require("../../assets/imags/avatar1.png")} alt="" />
                    </div>

                </div>


            </div>



        </div>
    )
}

export default OurAwards