
import React from 'react';
import './course-component.style.css';
import {CourseSpec} from '../course-component/coursespec-component';
export const Course =  (props) => {
    return (
        <div className="course-list">
         {
            props.courseData.map(co => (<CourseSpec key={co.id} coData={co}/>)) 
         }
        </div>
    )
};