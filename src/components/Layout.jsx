import { Link, Outlet } from "react-router-dom"

function Layout() {
    return (
        <div className="container-all">
            <div className="container-layout">
                <h1 className="layout-header">Best Email Client</h1>
                <nav className="container-links">
                    <Link to={''}>Home</Link>
                    <Link to={'about'}>About</Link>
                    <Link to={'inbox'}>Inbox</Link>
                    <Link to={'sent'}>Sent</Link>
                    <Link to={'new-email'}>New Email</Link>
                </nav>
            </div>
            <Outlet />
        </div>
    )
}

export default Layout;