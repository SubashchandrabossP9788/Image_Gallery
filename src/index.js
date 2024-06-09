import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import one from "./assets/images/Arabian jasmine.jpg"
import two from "./assets/images/Begonia.jpg"
import three from "./assets/images/Chrysanthemum.jpg"
import four from "./assets/images/Dahlia.jpg"
import five from "./assets/images/Hibiscus.jpg"
import six from "./assets/images/Magnolia.jpg"
import seven from "./assets/images/Peacock Flower.jpg"
import eight from "./assets/images/sunflower.jpg"


const root = ReactDOM.createRoot(document.getElementById('root'));
function  Heading()
{
  return(

    <h1 class="heading">Image Gallary</h1>
  )
}
function Images(){
  return(
    <div class="boxes">
      <div class="box">
        <img src={one} alt="" srcset="" />
        <p>Arabian jasmine</p>
      </div>
      <div class="box">
        <img src={two} alt="" srcset="" />
        <p>Begonia</p>
      </div>
      <div class="box">
        <img src={three} alt="" srcset="" />
        <p>Chrysanthemum</p>
      </div>
      <div class="box">
        <img src={four} alt="" srcset="" />
        <p>Dahlia</p>
      </div>
      <div class="box">
        <img src={five} alt="" srcset="" />
        <p>Hibiscus</p>
      </div>
      <div class="box">
        <img src={six} alt="" srcset="" />
        <p>Magnolia</p>
      </div>
      <div class="box">
        <img src={seven} alt="" srcset="" />
        <p>Peacock Flower</p>
      </div>
      <div class="box">
        <img src={eight} alt="" srcset="" />
        <p>Sunflower</p>
      </div>
    </div>
  )
}
root.render(
  <div>
    <Heading></Heading>
    <Images></Images>
  </div>
  
);

