interface MessageProps {
    message: string;
    year: number;
}

export const Message: React.FC<MessageProps> = ({ message, year }) => {
    return <div>{message} in {year}</div>
}
