import React, { Component } from 'react';
import Card from './Card.js';
import {useState,useEffect} from 'react'

function Products() {

    return (
        <div class="latest-products">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-heading">
                            <h2>Latest Products</h2>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="product-item">
                            <a href="#"><img src="assets/images/product_01.jpg" alt="" /></a>
                            <div class="down-content">
                                <a href="#"><h4>Iphone XS</h4></a>
                                <h6>$25.75</h6>
                                <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="product-item">
                            <a href="#"><img src="assets/images/product_02.jpg" alt="" /></a>
                            <div class="down-content">
                                <a href="#"><h4>20 Laptop</h4></a>
                                <h6>$30.25</h6>
                                <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="product-item">
                            <a href="#"><img src="assets/images/product_03.jpg" alt="" /></a>
                            <div class="down-content">
                                <a href="#"><h4>Mercess XX</h4></a>
                                <h6>$20.45</h6>
                                <p>Sixteen Clothing is free CSS template provided by TemplateMo.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="product-item">
                            <a href="#"><img src="assets/images/product_04.jpg" alt="" /></a>
                            <div class="down-content">
                                <a href="#"><h4>Lexus YY</h4></a>
                                <h6>$15.25</h6>
                                <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="product-item">
                            <a href="#"><img src="assets/images/product_05.jpg" alt="" /></a>
                            <div class="down-content">
                                <a href="#"><h4>Ipad 4</h4></a>
                                <h6>$12.50</h6>
                                <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="product-item">
                            <a href="#"><img src="assets/images/product_06.jpg" alt="" /></a>
                            <div class="down-content">
                                <a href="#"><h4>Ipad 5</h4></a>
                                <h6>$22.50</h6>
                                <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Products;