import { NavLink, Outlet } from "react-router-dom"

function MainLayout() {
    return (
        <div>
            <header>
                <nav className='flex items-center justify-between container mx-auto'>
                    <h1>My Logo</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/article">Article</NavLink>
                </nav>
            </header>
            <main className="container mx-auto my-5">
                <Outlet/>
            </main>
            <footer className='container mx-auto flex items-center justify-between'>
                <h1>Footer</h1>
                <h1>Footer end</h1>
            </footer>
        </div>
    )
}

export default MainLayout