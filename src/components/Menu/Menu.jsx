import "./Menu.css"

import { useState } from "react"
import { Link } from "react-router-dom"

function Menu() {
    const [open, setOpen] = useState(false)

    return (
        <div className="Menu">
            <button className="Menu-menu" onClick={() => setOpen(!open)}>☰</button>

            <div className={`Menu-items ${open ? "Menu-items-open" : ""}`}>
                <Link className="Menu-item" to="/" onClick={() => setOpen(false)}>
                    <span className="Menu-icon">⌂</span>
                    <span>Accueil</span>
                </Link>

                <Link className="Menu-item" to="/" onClick={() => setOpen(false)}>
                    <span className="Menu-icon">♡</span>
                    <span>Garder</span>
                </Link>

                <Link className="Menu-item" to="/" onClick={() => setOpen(false)}>
                    <span className="Menu-icon">♡</span>
                    <span>Faire garder</span>
                </Link>

                <Link className="Menu-item" to="/" onClick={() => setOpen(false)}>
                    <span className="Menu-icon">⚙</span>
                    <span>Profil</span>
                </Link>
            </div>
        </div>
    )
}

export default Menu