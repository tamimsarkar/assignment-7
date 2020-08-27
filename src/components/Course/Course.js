import React from 'react';
import './Course.css'
const Course = (props) => {
    const {title,des,img,price} =props.course
   
    return (
        <div className='card'>
            <img src={img} alt=""/>
            <h3>Course : {title}</h3>
            <h4>Price : {price} Taka</h4>
            <div className='description'>

            <h6><small>des : {des}</small></h6>
            </div>
            <button className='btn btn-success' onClick={() => props.enrollNow(props.course)}>Enroll Now <span><i class="fas fa-plus"></i></span></button>
        </div>
    );
};

export default Course;