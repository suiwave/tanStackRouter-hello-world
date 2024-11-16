import { Link } from "@tanstack/react-router"

export const MoveLink = () => {
    return (
        <>
            <Link to={"/sample"} search={{ message: "reiwa", year: 2019 }}>/sample</Link>
            <Link to={"/sample/test"}>/sample/test</Link>
        </>
    )
}