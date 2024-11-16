import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sample/child/')({
  component: () => <div>Hello /sample/child/!</div>,
})
