import { NavLink, Outlet } from "react-router-dom"

function ContactLayout() {
    return (
        <>
            <div>
                <p className='text-5xl'>Contact</p>
            </div>
            <nav>
                <NavLink to='faq'>FAQ</NavLink>
                <NavLink to='form'>Form</NavLink>
            </nav>
            <Outlet/>
        </>
    )
}

export default ContactLayout