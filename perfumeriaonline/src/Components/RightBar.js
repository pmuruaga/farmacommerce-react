import React from "react";

function RightBar(){
    return(
        <>            
            <aside id="sidebar">                        
                <div id="search" className="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Encuentra el perfume que buscas...</p>
                    <form action="">
                        <input type="text" name="search" />
                        <input type="submit" name="submit" value="Buscar" class="btn" />
                    </form>
                </div>
            </aside>      
        </>
    );
}

export default RightBar;