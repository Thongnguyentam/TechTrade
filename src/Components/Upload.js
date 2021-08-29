import React from 'react'
import {useEffect,useState} from 'react';
import Card from "./Card.js";
function Upload() {
    const [listItem, setListItem] = useState();

    function handleClick(event) {
        var name = document.getElementsByClassName("name");
        var price = document.getElementsByClassName("price");
        var year = document.getElementsByClassName("year");
        var description = document.getElementsByClassName("description");
      setListItem(
        <Card
          name="Toyota Rav4 2013"
          src="assets/images/add_product.png"
          description="Take command of the road in the 2013 Toyota RAV4!

Unique in its class, this vehicle appeals to an expansive set of drivers by establishing a stylish look, dependable performance and excellent value! Toyota infused the interior with top shelf amenities, such as: tilt steering wheel, heated door mirrors, and remote keyless entry. It features a front-wheel-drive platform, an automatic transmission, and a 2.5 liter 4 cylinder engine.

Our sales reps are knowledgeable and professional. We'd be happy to answer any questions that you may have. We are here to help you."
          prices="$10000-$12000"
          quality="60%-70% new"
        />
      );
    };
    return (
      <div className="upload-container">
        <div class="col-md-12">
          <label class="labels">Name</label>
          <input
            type="text"
            class="form-control"
            className="name"
            placeholder="Phone number"
          />
        </div>
        <div class="col-md-12">
          <label class="labels">Year</label>
          <input
            type="text"
            class="form-control"
            placeholder="Address line 1"
          />
        </div>
        <div class="col-md-12">
          <label class="labels">Image</label>
          <input
            type="file"
            class="form-control"
            placeholder="Address line 2"
          />
        </div>
        <div class="col-md-12">
          <label class="labels">New price</label>
          <input type="text" class="form-control" placeholder="Education" />
        </div>
        <div class="col-md-12">
          <label class="labels">Description</label>
          <input type="text" class="form-control" placeholder="Education" />
        </div>

        <button onClick={handleClick}>upload</button>

        <div className="container">{listItem}</div>
      </div>
    );
}

export default Upload
