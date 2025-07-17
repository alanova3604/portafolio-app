import { Icon } from '@iconify/react';

function Header() {

    return (
        <header>
            <div className="container">
                <div className="social-media">
                    <a href="https://www.linkedin.com/in/alanvalcala" target="_blank" rel="noopener noreferrer">
                        <Icon icon="bi:linkedin" width="25" height="25" />
                    </a>
                    <a href="https://github.com/alanova3604/portafolio-app.git" target="_blank" rel="noopener noreferrer">
                        <Icon icon="bytesize:github" width="25" height="25" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header
