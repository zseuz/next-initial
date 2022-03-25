import { ActiveLink } from './ActiveLink';
import style from './Navbar.module.css';

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];
export const NavBar = () => {
    return (

        <nav className={style['menu-container']}>
            {
                menuItems.map(({text,href})=>(
                    <ActiveLink key={href} href={href} text={text}/>
                ))
            }
        
            {/* <ActiveLink href='/' text='home'/>
            <ActiveLink href='/about'text='about'/>
            <ActiveLink href='/contact'text='contact'/>
            <ActiveLink href='/pricing'text='pricing'/> */}
        </nav>
    )
}
