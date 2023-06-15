import React from 'react';
import '../../style/header/header.scss';
import { BiUser } from 'react-icons/bi';

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
            <div className="header-user">
                <button><BiUser /></button>
            </div>
        </div>
    )
}
