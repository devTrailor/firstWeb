import { OmitProps } from 'antd/lib/transfer/ListBody'
import React from 'react'

const InfoPage = (props) => {
    return (
        <>
            <div className="design-part">
                <div className="design-info info">
                    <h1 className="design-intro title2">
                        {props.title}
                    </h1>
                    <div className="sub-info description">
                         {props.description}
                    </div>
                    <div className="design-lists">
                        <li>{props.subject_title1}</li>
                        <li>{props.subject_title2}</li>
                        <li>{props.subject_title3}</li>
                     
                    </div>
                </div>
            </div>

        </>
    )
}

export default InfoPage