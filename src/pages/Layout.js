import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/stats">Estatísticas</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}