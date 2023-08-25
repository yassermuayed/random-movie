import React, { useEffect } from 'react'
import loopIcon from '../assets/icons/loop-icon.webp'
import logoWhite from '../assets/logo-white.webp'
import { NavLink, Router } from 'react-router-dom'
import { IconHome2, IconSearch, IconTicket, IconUserCircle } from '@tabler/icons-react'
import { useSessionDataStore } from '../hooks/session-data-store'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const mediaID = useSessionDataStore((state) => state.mediaID)
    const setMediaID = useSessionDataStore((state) => state.setMediaID)
    const [loopLink, setLoopLink] = React.useState("/view")

    useEffect(() => {
        if (mediaID === "0") {
            setLoopLink("/view")
        } else {
            setLoopLink(`/view/movie/${mediaID}`)
        }
    }, [mediaID])

    function handleClick() {
        console.log(window.location.href)
        const pathOnClick: string = window.location.href;
        if (pathOnClick.includes("view")) {
            const newRandomID = Math.floor(Math.random() * 100000 + 1)
            console.log("newRandomID", newRandomID)
            setLoopLink(`/view/movie/${newRandomID}`)
        
        } else {
            setLoopLink(`/view/movie/${mediaID}`)
        }
    }


    return (
        <div>
            <div className="navbar hidden lg:flex bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a >Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost">
                        <img className=' w-24' src={logoWhite} alt="logo" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
            <div className=' mb-24'>

                {children}
            </div>
            <div className="btm-nav lg:hidden">
                <NavLink to="/" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
                    <IconHome2 />
                </NavLink>

                <NavLink to="/search" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
                    <IconSearch />
                </NavLink>

                {/* loop icon */}
                <NavLink onClick={handleClick} to={loopLink} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>

                    <img className='    w-11 spinner' src={loopIcon} alt="logo" />
                </NavLink>


                <NavLink to="/ticket" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
                    <IconTicket />
                </NavLink>

                <NavLink to="/user" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
                    <IconUserCircle />
                </NavLink>

            </div >
        </div >
    )
}
