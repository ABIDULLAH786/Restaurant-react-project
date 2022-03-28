import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";

import React, {useState } from "react";
import { Routes, Route, useParams, withRouter } from "react-router-dom";
import {connect} from "react-redux"

const mapStateToProps = state => {
  return{
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
    dishes: state.dishes
  }
}
function Main(props){
  // const [dishes, setDishes] = useState(DISHES);
  // const [comments, setComments] = useState(COMMENTS);
  // const [promotions, setPromotions] = useState(PROMOTIONS);
  // const [leaders, setLeaders] = useState(LEADERS);
  const [detail, setDetail] = useState(false);
  const [selectedDish, setSelectDish] = useState();


  function  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }
  
  const params = useParams()
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              dish={props.dishes.filter((dish) => dish.featured)[0]}
              promotion={ props.promotions.filter((promo) => promo.featured)[0]}
              leader={props.leaders.filter((leader) => leader.featured)[0]}
            />
          }
        />
        <Route
          path="/menu"
          element={
            <Menu
              dishes={props.dishes}
              onClick={(dishId) => {
                onDishSelect(dishId);
                setDetail((prev) => ({ detail: true }));
                alert(props.dishes);
              }}
            />
          }
        />
        <Route path="/menu/:dishId" element={
          <DishDetail
            dish={props.dishes.filter((dish) => dish.id === 1)}
            comments={props.comments.filter((comment) => comment.dishId === 1)}
          />} 
        />
        <Route exact path="/contactus" element={<Contact/>} />
        <Route exact path="/aboutus" element={<About leaderslist={props.leaders}/>} />
      </Routes>
      {/* Dish Details */}
      {detail && (
        <DishDetail
          dish={
            props.dishes.filter(
              (dish) => dish.id === selectedDish
            )[0]
          }
        />
      )}
      <Footer />
    </div>
  );
}
export default connect(mapStateToProps)(Main);
