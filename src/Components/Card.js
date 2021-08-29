import React from 'react'

function Card(props) {
    return (
      <div class="col-md-4">
        <div class="product-item">
          <a href="#">
            <img src={props.src} alt="" />
          </a>
          <div class="down-content">
            <a href="#">
              <h4>{props.name}</h4>
            </a>
            <h6>{props.year}</h6>
            <p>{props.description}</p>
            <p className="bold">{props.quality}</p>
            <p className="bold"> Estimated price: {props.prices} </p>
          </div>
        </div>
      </div>
    );
}

export default Card
