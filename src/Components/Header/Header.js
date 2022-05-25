import { useState } from 'react'
import classNames from 'classnames'
import { BsXLg } from 'react-icons/bs'
import './Header.css'

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

                        <li className={classNames('sliding__items', { 'sliding__items__animation': isSliding })}>Home</li>
                        <li className={classNames('sliding__items', { 'sliding__items__animation': isSliding })}>About</li>
                        <li className={classNames('sliding__items', { 'sliding__items__animation': isSliding })}>Services</li>
                        <li className={classNames('sliding__items', { 'sliding__items__animation': isSliding })}>Works</li>
                        <li className={classNames('sliding__items', { 'sliding__items__animation': isSliding })}>Clients</li>
                        <li className={classNames('sliding__items', { 'sliding__items__animation': isSliding })}>Contacts</li>
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