import { Icon } from '@iconify/react';

function Header() {

    return (
        <>
            <header>
                <div className="container">
                    <div className="social-media">
                        <a href="https://www.linkedin.com/in/alanvalcala" target="_blank">
                            <Icon icon="bi:linkedin" width="25" height="25" />
                        </a>
                        <a href="https://github.com/alanova3604/portafolio-ux-static" target="_blank">
                            <Icon icon="bytesize:github" width="25" height="25" />
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
