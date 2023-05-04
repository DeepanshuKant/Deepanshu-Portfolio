

import React from 'react'
import './Footer.css'

import { AiFillInstagram, AiFillGithub, AiFillLinkedin, AiFillBehanceSquare } from 'react-icons/ai'

function Footer() {
    return (
        <>
            <footer>
                <div className="footer__main__parent">
                    <div className="footer__top">
                        <div className="footer__left">
                            <h1>Portfolio.</h1>
                            <p>
                                “First forget inspiration. Habit is more dependable. Habit will sustain you whether you're inspired or not. Habit will help you finish and polish your stories. Inspiration won't. Habit is persistence in practice.” ―Octavia Butler
                            </p>
                        </div>

                        <div className="footer__right">
                            <a href="https://www.instagram.com/kant69__/" target="_blank" ><AiFillInstagram /></a>
                            <a href="https://github.com/DeepanshuKant" target="_blank"><AiFillGithub /></a>
                            <a href="https://www.linkedin.com/in/deepanshu-kant-673b2a1b4/" target="_blank"><AiFillLinkedin /></a>
                            <a href="https://www.behance.net/deepanshukant" target="_blank"><AiFillBehanceSquare /></a>
                        </div>
                    </div>

                    <div className="footer__bottom">
                        <p> &copy; Copyright Portfolio 2022</p>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer