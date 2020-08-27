import React,{useState} from 'react';
import fakeData from '../../fakeData/fakeData'
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
import './Home.css'
const Home = () => {
   const [courses, setCourses] = useState(fakeData)
   const [cart, setCart] = useState([])

   const enrollNow = (course) => {
        const newCart = [...cart,course]
        setCart(newCart)
   }
    return (
        <div>
            <div className="home-container">
              <div className="courses">
                    {
                        courses.map(course => <Course enrollNow={enrollNow} key={course.id} course={course}></Course>)
                    }
              </div>    
              <div className="cart">
                    <Cart cart={cart} ></Cart>
              </div>    
            </div>
        </div>
    );
};

export default Home;