import React from 'react';
import './coursespec..styles.css';
export const CourseSpec = (props) => {
    //console.log(props);
    const url = props.coData.preview_image_url;
    return (
        <div className="course-container">
            <img  className="coding-image"  alt="codingninja courses" src={url}/>
             <h2>{props.coData.name}</h2>
             <p>{props.coData.level}</p>
        </div>
    )
}