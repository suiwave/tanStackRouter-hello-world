import type { MouseEvent } from "react";

import { useNavigate } from '@tanstack/react-router';

export const SubmitButton = () => {

    const navigate = useNavigate();

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate({ to: "/sample", search: { message: "type safe!", year: 3150 } });
    };

    return (
        <button onClick={handleClick}>submit!</button>
    );
};