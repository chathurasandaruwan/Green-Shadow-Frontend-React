import {Link} from "react-router";

export function Navigation() {
    return (
        <>
            <nav>
                <a className="" href="#">Navbar</a>
                <button className="" type="button" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <i className="fas fa-bars text-white"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <div className="hori-selector">
                            <div className="left"></div>
                            <div className="right"></div>
                        </div>
                        <li className="nav-item ">
                            <Link className="nav-link" to='/'>Dashboard</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to='/crop'>Crop Manage</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/field'>Field Manage</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/staff'>Staff Manage</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/vehicle'>Vehicle Manage</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/log'>Log Manage</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/equipment'>Equipment Manage</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}