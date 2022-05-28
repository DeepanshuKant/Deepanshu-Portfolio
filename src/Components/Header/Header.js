import { useState } from 'react'
import classNames from 'classnames'
import { BsXLg } from 'react-icons/bs'
import './Header.css'
import { Link } from 'react-scroll'


function Header() {

    const [isSliding, setIsSliding] = useState(false);


    const isChanging = () => {
        setIsSliding(!isSliding);
    }


    return (
        <>
            <div className='hamburger' onClick={isChanging}>
                <div className='menu__text'><p>MENU</p></div>
                <div className="menu__icons">
                    <ul>
                        <li className='menu__icon__list'></li>
                        <li className='menu__icon__list'></li>
                        <li className='menu__icon__list'></li>
                    </ul>
                </div>
            </div>


            <div className={classNames('sliding__window', { 'sliding__window__active': isSliding })}>
                <div className="first__box">
                    <div className={classNames('menu__text__nav', { 'sliding__items__animation': isSliding })}>NAVIGATION</div>
                    <div onClick={isChanging} className="close__icon" ><BsXLg /></div>
                </div>
                <div className="second__box">
                    <ul>

                        <li className={classNames('sliding__items', { 'sliding__items__animation': isSliding })}> <Link to="home" spy={true} smooth={true} offset={1} duration={500}>Home</Link></li>
                        <li className={classNames('sliding__items', { 'sliding__items__animation': isSliding })}> <Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
                        <li className={classNames('sliding__items', { 'sliding__items__animation': isSliding })}> <Link to="service" spy={true} smooth={true} offset={50} duration={500}>Service</Link></li>
                        <li className={classNames('sliding__items', { 'sliding__items__animation': isSliding })}> <a href="" > Works</a></li>
                        <li className={classNames('sliding__items', { 'sliding__items__animation': isSliding })}> <a href="" >Contacts</a></li>
                    </ul >
                </div >
                <div className="third__box">
                    <p className={classNames('third__content', { 'sliding__items__animation': isSliding })}>
                        Perspiciatis hic praesentium nesciunt. Et neque a dolorum voluptatem porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis neque reprehenderit.
                    </p>
                </div>
            </div >
        </>
    )
}

export default Header