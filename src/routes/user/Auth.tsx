import React from 'react'
import RootLayout from '../../component/RootLayout'
import { Outlet } from 'react-router-dom'

export default function Auth() {
    return (
        <div>
            <h1 className=' text-secondary text-center'>Auth Page</h1>


            <form className=''>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">What is your name?</span>
                        <span className="label-text-alt">Top Right label</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>
            <Outlet />
        </div>
    )
}
