import Footer from "../Ui/Footer";
import Navbar from "../Ui/Navbar";


const RootLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default RootLayout;