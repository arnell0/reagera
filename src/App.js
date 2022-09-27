import React from 'react';
import './App.css';

import ImageUpload from './components/ImageUpload';

export default function App() {
    return (
        <div className="App">
            <h1>Preview</h1>
            <div className="prewiew">
                <div className="prewiew__menu">
                    <div className="prewiew__menu-item">
                        test menu
                    </div>
                </div>
                <div className="prewiew__content">
                    <div className="prewiew__content-item">
                        <ImageUpload />
                    </div>
                </div>
            </div>
        </div>
    );
}
