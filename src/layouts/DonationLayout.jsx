import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DonationLayout = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <section>
                <Outlet></Outlet>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default DonationLayout;