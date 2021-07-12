import {NavLink} from "react-router-dom";

export default function NavbarItem({to, children, title}) {
    return (
        <li>
            <NavLink to={to}
                     activeClassName={'rounded-none border-b-4 border-white'}
                     className={`block px-4 py-2 rounded hover:bg-indigo-700 active:bg-indigo-900`}
                     title={title}>
                {children}
            </NavLink>
        </li>
    )
}