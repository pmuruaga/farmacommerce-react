import React from "react";
import ProductsList from "../Components/ProductsList";

function HomePage(){    
    return(
        <>
            <div className="main-container">                
                {/* <ProductsList></ProductsList> */}
                Home

                <ProductsList />
            </div>
        </>
    );
}

export default HomePage;