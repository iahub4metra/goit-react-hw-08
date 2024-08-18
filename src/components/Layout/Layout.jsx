import { Suspense, lazy } from "react";
import AppBar from "../AppBar/AppBar";
import { Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"))
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage.jsx"))
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage.jsx"))
const PrivateRoute = lazy(() => import("../PrivateRoute.jsx"))
const RestrictedRoute = lazy(()=> import("../RestrictedRoute.jsx"))
const ContactsPage = lazy(()=> import('../../pages/ContactsPage/ContactsPage.jsx'))

const Layout = () => {
    return (
        <>
            <AppBar />
            <main>
                <Suspense fallback={<p>Loading...</p>}>
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />}/>} />
                        <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />}/>} />
                        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage/>} />} />
                    </Routes>
                </Suspense>
            </main>
            
            <Footer/>
        </>
    );
}
 
export default Layout;