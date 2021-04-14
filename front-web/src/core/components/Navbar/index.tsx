import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
    <nav className="row bg-primary main-nav">
        <div className="col-3">
            <Link to="/" className="nav-logo-text">
                <h4>Dicionário Online Analógico</h4>
            </Link>
        </div>
        <div className="col-9">
            <ul className="main-menu">
                <li>
                    <NavLink to="/" exact>INÍCIO</NavLink>
                </li>
                <li>
                    <NavLink to="#">APRESENTAÇÃO</NavLink>
                </li>
                <li>
                    <NavLink to="#">ELABORAÇÃO</NavLink>
                </li>
                <li>
                    <NavLink to="#">GUIA DE CONSULTAS</NavLink>
                </li>
                <li>
                    <NavLink to="#">LISTA DE ABREVIATURAS</NavLink>
                </li>
                <li>
                    <NavLink to="#">CRÉDITOS</NavLink>
                </li>
                <li>
                    <NavLink to="#">REFERÊNCIAS</NavLink>
                </li>
                <li>
                    <NavLink to="#">CONTATO</NavLink>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;
