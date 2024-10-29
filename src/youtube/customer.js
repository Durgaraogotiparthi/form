import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './create'; 
import Home from './home';
import Read from './read'; 
import Delete from './delete';
function Customer() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/create' element={<Create />} />
                    <Route path='/read' element={<Read />} />
                    <Route path='/delete' element={<Delete />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Customer;
