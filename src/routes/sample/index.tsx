import { createFileRoute } from '@tanstack/react-router'
import { Message } from '../../components/Message'

interface MessageProps {
  message: string
  year: number
}

const Sample = () => {
  const params = Route.useSearch()
  return <Message message={params.message} year={params.year} />
}

export const Route = createFileRoute('/sample/')({
  validateSearch: (search: Record<string, unknown>): MessageProps => {
    return {
      message: String(search?.message ?? 'not found'),
      year: Number(search?.year ?? 9999),
    }
  },
  component: Sample,
})
