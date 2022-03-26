import React, { Component, useState } from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Routes, Route, useParams } from "react-router-dom";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
// I convert my class based component into functional based component 
// because i am more confortable with functional based, so please do not assesst my work based on this thing 
function Main(props){
  const [dishes, setDishes] = useState(DISHES);
  const [comments, setComments] = useState(COMMENTS);
  const [promotions, setPromotions] = useState(PROMOTIONS);
  const [leaders, setLeaders] = useState(LEADERS);
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
              dish={dishes.filter((dish) => dish.featured)[0]}
              promotion={ promotions.filter((promo) => promo.featured)[0]}
              leader={leaders.filter((leader) => leader.featured)[0]}
            />
          }
        />
        <Route
          path="/menu"
          element={
            <Menu
              dishes={dishes}
              onClick={(dishId) => {
                onDishSelect(dishId);
                setDetail((prev) => ({ detail: true }));
                alert(dishes);
              }}
            />
          }
        />
        <Route path="/menu/:dishId" element={
          <DishDetail
            dish={dishes.filter((dish) => dish.id === 1)}
            comments={comments.filter((comment) => comment.dishId === 1)}
          />} 
        />
        <Route exact path="/contactus" element={<Contact/>} />
        <Route exact path="/aboutus" element={<About leaderslist={leaders}/>} />
      </Routes>
      {/* Dish Details */}
      {detail && (
        <DishDetail
          dish={
            dishes.filter(
              (dish) => dish.id === selectedDish
            )[0]
          }
        />
      )}
      <Footer />
    </div>
  );
}
export default Main;
