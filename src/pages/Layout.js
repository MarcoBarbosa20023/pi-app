import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

export const Layout = () => {
    return(
        <>        
            <nav className="nav-container">
                <div className="nav-menu">
                    <ul className="nav-bar-list">
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link nav-clk">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/table" className="nav-link nav-clk">Tabela</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/stats" className="nav-link nav-clk">Estatísticas</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    );
}