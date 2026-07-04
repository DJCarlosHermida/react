import { Link } from 'react-router-dom'
import './Logo.scss'

const LOGO_LOCAL = `${process.env.PUBLIC_URL}/logo.png`
const LOGO_FALLBACK = 'https://djcarloshermida.com.uy/img/logo2.png'

const Logo = ({ className = '' }) => {
    return (
        <Link to="/" className={`header__logo-link ${className}`.trim()} aria-label="Ir al inicio">
            <img
                src={LOGO_LOCAL}
                className="header__logo-img"
                alt="DJ Team"
                title="DJ Team | Ecommerce"
                onError={(e) => {
                    if (e.currentTarget.src !== LOGO_FALLBACK) {
                        e.currentTarget.src = LOGO_FALLBACK
                    }
                }}
            />
        </Link>
    )
}

export default Logo
