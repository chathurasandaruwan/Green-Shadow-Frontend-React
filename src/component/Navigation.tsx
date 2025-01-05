import {Link} from "react-router";
import '@fortawesome/fontawesome-free/css/all.min.css';

export function Navigation() {
    return (
        <>
            <nav className="navbar navbar-expand-custom navbar-mainbg">
                <a className="navbar-brand navbar-logo" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <i className="fas fa-bars text-white"></i>
                </button>
                <div className="collapse navbar-collapse overflow-hidden relative flex justify-center" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <div className="hori-selector">
                            <div className="left"></div>
                            <div className="right"></div>
                        </div>
                        <li className="nav-item">
                            <Link className="nav-link" to='/'><i className="fas fa-tachometer-alt"></i>Dashboard</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to='/crop'><i className="fa fa-crop" aria-hidden="true"></i>Crop
                                Manage</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/field'><i className="far fa-clone"></i>Field Manage</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/staff'><i className="fa fa-users" aria-hidden="true"></i>Staff
                                Manage</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/vehicle'><i className="fa fa-car" aria-hidden="true"></i>Vehicle
                                Manage</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/log'><i className="far fa-calendar-alt"></i>Log Manage</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/equipment'><i className="far fa-copy"></i>Equipment
                                Manage</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}