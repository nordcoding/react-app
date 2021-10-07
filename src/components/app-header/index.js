import React from 'react';
import './app-header.css'; 

const AppHeader = () => {
    return(
        //elementi sostavlyaut bloki componentov, kak naprimer tut h1,h2 - eto elementi, componenta AppHeader // 
        <div className ='app-header d-flex'>
            <h1>React interactive list</h1>
            <h2>Total 5 records, liked 0</h2>
        </div>
    )
}

export default AppHeader; 