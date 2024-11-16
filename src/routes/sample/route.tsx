import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/sample')({
    component: () => <><div>Hello /sample</div><Outlet /></>,
})
