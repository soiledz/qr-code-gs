import {Link} from "react-router-dom";
import s from "./Navigation.module.css"

export const Navigation = () => {
    return (
        <nav className={s.container}>
            <Link to="/generate">Generate QR</Link>
            <Link to="/scan">Scan QR</Link>
            <Link to="/generateHistory">History generate</Link>
            <Link to="/scanHistory">History scan</Link>
        </nav>
    )
}