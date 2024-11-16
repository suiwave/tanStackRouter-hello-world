import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
    component: () => (
        <React.Fragment>
            <h1>TanStack Router やってみた</h1>
            <Outlet />
        </React.Fragment>
    ),
})
