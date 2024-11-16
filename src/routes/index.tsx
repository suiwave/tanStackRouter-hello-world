import { createFileRoute } from '@tanstack/react-router'
import { SubmitButton } from "../components/Button"
export const Route = createFileRoute('/')({
  component: () => <><div>Hello /!</div><SubmitButton /></>,
})
