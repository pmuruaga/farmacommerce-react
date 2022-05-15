import React from "react";
import ProductsList from "../Components/ProductsList";
import RightBar from "../Components/RightBar";

function HomePage(){    
    return(
        <>
            <div className="center">
                <div className="main-container">                                
                    <ProductsList />
                </div>
                <RightBar />
                <div className="clearfix"></div>
            </div>
        </>
    );
}

export default HomePage;