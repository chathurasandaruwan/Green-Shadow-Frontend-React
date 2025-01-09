import {Link} from "react-router";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import $ from "jquery";

export function Navigation() {
    function test(): void {
        const tabsNewAnim = $("#navbarSupportedContent");
        // const selectorNewAnim = tabsNewAnim.find("li").length;
        const activeItemNewAnim = tabsNewAnim.find(".active");
        const activeWidthNewAnimHeight = activeItemNewAnim.innerHeight() || 0;
        const activeWidthNewAnimWidth = activeItemNewAnim.innerWidth() || 0;
        const itemPosNewAnimTop = activeItemNewAnim.position() || { top: 0, left: 0 };
        const itemPosNewAnimLeft = activeItemNewAnim.position() || { top: 0, left: 0 };

        $(".hori-selector").css({
            top: `${itemPosNewAnimTop.top}px`,
            left: `${itemPosNewAnimLeft.left}px`,
            height: `${activeWidthNewAnimHeight}px`,
            width: `${activeWidthNewAnimWidth}px`
        });

        $("#navbarSupportedContent").on("click", "li", function () {
            $("#navbarSupportedContent ul li").removeClass("active");
            $(this).addClass("active");
            const activeWidthNewAnimHeight = $(this).innerHeight() || 0;
            const activeWidthNewAnimWidth = $(this).innerWidth() || 0;
            const itemPosNewAnimTop = $(this).position() || { top: 0, left: 0 };
            const itemPosNewAnimLeft = $(this).position() || { top: 0, left: 0 };

            $(".hori-selector").css({
                top: `${itemPosNewAnimTop.top}px`,
                left: `${itemPosNewAnimLeft.left}px`,
                height: `${activeWidthNewAnimHeight}px`,
                width: `${activeWidthNewAnimWidth}px`
            });
        });
    }

    $(document).ready(() => {
        setTimeout(() => {
            test();
        }, 0);
    });

    $(window).on("resize", () => {
        setTimeout(() => {
            test();
        }, 500);
    });

    // Get the current path of the URL
    let path: string = window.location.pathname.split("/").pop() || "";

// If the path is empty (home page), default to 'index.html'
    if (path === "") {
        path = "index.html";
    }

// Find the target link using the href attribute
    const target = $('#navbarSupportedContent ul li a').filter(function () {
        return $(this).attr('href') === path;
    });
    // console.log(target)

// Remove "active" class from all links and add to the target link
    $('#navbarSupportedContent ul li').removeClass("active");
    target.parent().addClass("active");


    function togglerOnAction() {
        $(".navbar-collapse").slideToggle(300);
        setTimeout(() => {
            test();
        }, 0);
    }

    return (
        <>
            <nav className="navbar navbar-expand-custom navbar-mainbg">
                <a className="navbar-brand navbar-logo" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation" onClick={togglerOnAction}>
                    <i className="fas fa-bars text-white"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <div className="hori-selector">
                            <div className="left"></div>
                            <div className="right"></div>
                        </div>
                        <li className="nav-item active ">
                            <Link className="nav-link" to='/'><i className="fas fa-tachometer-alt"></i>Dashboard</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to='/crop'><i className="fa fa-crop" aria-hidden="true"></i>Crop Manage</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/field'><i className="far fa-clone"></i>Field Manage</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/staff'><i className="fa fa-users" aria-hidden="true"></i>Staff Manage</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/vehicle'><i className="fa fa-car" aria-hidden="true"></i>Vehicle Manage</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/log'><i className="far fa-calendar-alt"></i>Log Manage</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/equipment'><i className="far fa-copy"></i>Equipment Manage</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}