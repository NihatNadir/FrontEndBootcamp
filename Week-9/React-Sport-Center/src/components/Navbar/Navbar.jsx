import { useState, useEffect } from 'react';
import Logo from "/images/logo.png";
import "./Navbar.style.css";

function Navbar( { setNavbarHeight } ) {


    useEffect(() => {
        const navbar = document.getElementById('navbar');
        // Navbar yüksekliğini alıyoruz ve state'e kaydediyoruz
        if (navbar) {
            setNavbarHeight(navbar.offsetHeight);
        }
        // Scroll effect for navbar
        function scroll() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = "var(--navBg)";
            } else {
                navbar.style.backgroundColor = "transparent";
            }
        }

        // Button click effect
        function addEffect(button) {
            removeEffect(button);
            const effect = document.createElement('div');
            effect.classList.add('effect');
            button.appendChild(effect);
        }

        function removeEffect(button) {
            const existingEffect = button.querySelector('.effect');
            if (existingEffect) {
                existingEffect.remove();
            }
        }

        // Event listener for button clicks
        const buttons = document.querySelectorAll('.button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const activeButton = document.querySelector('.button.active');
                if (activeButton) {
                    activeButton.classList.remove('active');
                    removeEffect(activeButton);
                }

                switch (button.id) {
                    case 'yoga':
                        changeToYoga();
                        break;
                    case 'group':
                        changeToGroup();
                        break;
                    case 'solo':
                        changeToSolo();
                        break;
                    case 'stretching':
                        changeToStretching();
                        break;
                }
                button.classList.add('active');
                addEffect(button);
            });
        });

        // Event listeners for scroll, load, and resize
        window.addEventListener('scroll', scroll);
        window.addEventListener('resize', scroll);

        // Cleanup event listeners on unmount
        return () => {
            window.removeEventListener('scroll', scroll);
            window.removeEventListener('resize', scroll);
            buttons.forEach(button => {
                button.removeEventListener('click', addEffect);
            });
        };
    }, [setNavbarHeight]);

    return (
        <nav id="navbar" className="sticky top-0 z-10">
            <div className="container flex items-center mx-auto px-4">
                <div className="w-8/12 xl:w-4/12">
                    <a href="#">
                        <img src={Logo} alt="logo" />
                    </a>
                </div>
                <div id="menu" className="flex gap-2 w-4/12 xl:w-8/12 items-center xl:px-10">
                    <div id="side" className="w-full xl:w-auto pe-4"><i id="burger" className="fa-solid fa-bars text-white text-4xl block"></i></div>
                    <div id="sidebar" className="xl:pt-0 xl:px-0 pt-20 xl:pb-0 pb-5 px-4 text-normal rounded-b-lg">
                        <a className="link-underline link-underline-opacity-0 text-white font-semibold px-4 py-2 text-center xl:text-start" href="#hero">Home</a>
                        <a className="link-underline link-underline-opacity-0 text-white font-semibold px-4 py-2 text-center xl:text-start" href="#classes">Classes</a>
                        <a className="link-underline link-underline-opacity-0 text-white font-semibold px-4 py-2 text-center xl:text-start" href="#trainer">Trainer</a>
                        <a className="link-underline link-underline-opacity-0 text-white font-semibold px-4 py-2 text-center xl:text-start" href="#review">Review</a>
                        <a className="link-underline link-underline-opacity-0 text-white font-semibold px-4 py-2 text-center xl:text-start" href="#contact">Contact</a>
                        <a className="link-underline link-underline-opacity-0 text-white font-semibold px-4 py-2 xl:px-2 px-4 rounded text-center xl:text-start" href="#">JOIN US</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;