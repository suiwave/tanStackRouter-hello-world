import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sample/test/')({
  component: () => <div>Hello /sample/test!</div>,
})
