import React from 'react'
import RootLayout from '../component/RootLayout'
import { Outlet } from 'react-router-dom'
import { useSessionDataStore } from '../hooks/session-data-store'

export default function Root() {
    const mediaID = useSessionDataStore((state)=> state.mediaID)
    return (
        <RootLayout>
            <h1 className=' text-secondary text-center'>Root Page mediaID: {mediaID} </h1>
            <Outlet />
        </RootLayout>
    )
}
