import Header from "./components/header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {Outlet} from "react-router-dom";

const Layout=()=> {
    return (
        <>
        <Header/>
            <Outlet />
        <Footer/>
        </>
    );
}

export default Layout;