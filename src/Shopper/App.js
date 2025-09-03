import React from "react";
import ReactDOM from 'react-dom/client';


function HeadingComponent(){
    return(
        <div>

        <div className="d-flex justify-content-between align-items-center bg-white text-dark p-2" style={{alignItems: 'center'}}>
            <div>
                <h2>Shopper.</h2>
            </div>

            <div>
                <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-between', alignItems: 'center', gap: '25px' }}>
                    <li>Home</li>
                    <li>Catalog</li>
                    <li>Shop</li>
                    <li>Pages</li>
                    <li>Blog</li>
                    <li>Docs</li>
                </ul>
            </div>

            <div>
                <ul className="nav-icons" style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-between', alignItems: 'center', gap: '25px' }}>
                    <li><span className="bi bi-search"></span></li>
                    <li><span className="bi bi-person"></span></li>
                    <li><span className="bi bi-heart"></span></li>
                    <li><span className="bi bi-cart"></span></li>
                </ul>
            </div>
        </div>
        <div style={{ textAlign: 'center',backgroundColor: 'black', color: 'white', padding: '10px' }}>
            <p>⚡️ Happy Holiday Deals on Everything ⚡️</p>
        </div>

    </div>
    )
}
function Card(props){
    return(
        <div style={{backgroundImage: `url(${props.image})`, backgroundSize: 'cover', height: '200px', width: '100%', borderRadius: '10px'}}>
             <div>
                {props.name}
             </div>
             <div>
                <button>Shop {props.name} <span className="bi bi-arrow"></span></button>
             </div>
        </div>
    )
}

function BodySection(){ 

    return(
        <Card image="https://images.unsplash.com/photo-1606787360230-2f8b1c3d4a5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" name="Product 1" />
    )

}



function AppRender(){
    return (
        <div>
            <HeadingComponent />
            <BodySection />
            {/* <FooterComponent /> */}
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<AppRender />);