import {Link} from "react-router-dom";
import s from "./Navigation.module.css"

export const Navigation = () => {
    return (
        <nav className={s.container}>
            <Link to="/generate">Generate QR cod</Link>
            <Link to="/scan">Scan QR cod</Link>
            <Link to="/generateHistory">History generate</Link>
            <Link to="/scanHistory">History scan</Link>
        </nav>
    )
}