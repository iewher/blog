import React from 'react';
import '../../style/header/header.scss';

export const Header = () => {
    return (
        <div className="header">
            <div className="header-name">
                <p>blog-app</p>
            </div>
            <div className="header-buttons">
                <button>Название</button>
                <button>Название</button>
                <button>Название</button>
            </div>
        </div>
    )
}
