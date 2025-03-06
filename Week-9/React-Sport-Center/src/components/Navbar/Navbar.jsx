import { useState, useEffect } from 'react';
import Logo from "/images/logo.png";
import "./Navbar.style.css";

function Navbar({ setNavbarHeight }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            setNavbarHeight(navbar.offsetHeight);
        }

        const handleResize = () => {
            if (window.innerWidth >= 800) {
                setIsSidebarOpen(true); // Ekran genişse menü kapalı olsun
            } 
        };

        // Navbar scroll effect
        const scroll = () => {
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = "var(--navBg)";
            } else {
                navbar.style.backgroundColor = "transparent";
            }
        };

        // Button click effect (for adding and removing effect classes)
        const addEffect = (button) => {
            removeEffect(button);
            const effect = document.createElement('div');
            effect.classList.add('effect');
            button.appendChild(effect);
        };

        const removeEffect = (button) => {
            const existingEffect = button.querySelector('.effect');
            if (existingEffect) {
                existingEffect.remove();
            }
        };

        const handleButtonClick = (button) => {
            const activeButton = document.querySelector('.button.active');
            if (activeButton) {
                activeButton.classList.remove('active');
                removeEffect(activeButton);
            }

            switch (button.id) {
                case 'yoga':
                    // changeToYoga(); // Implement the required functionality here
                    break;
                case 'group':
                    // changeToGroup(); // Implement the required functionality here
                    break;
                case 'solo':
                    // changeToSolo(); // Implement the required functionality here
                    break;
                case 'stretching':
                    // changeToStretching(); // Implement the required functionality here
                    break;
                default:
                    break;
            }

            button.classList.add('active');
            addEffect(button);
        };

        // Adding event listener to buttons for adding effects
        const buttons = document.querySelectorAll('.button');
        buttons.forEach(button => {
            button.addEventListener('click', () => handleButtonClick(button));
        });

        // Event listeners for scroll
        window.addEventListener('scroll', scroll);
        window.addEventListener('resize', handleResize);

        // Cleanup event listeners on unmount
        return () => {
            window.removeEventListener('scroll', scroll);
            window.removeEventListener('resize', scroll);
            window.removeEventListener("resize", handleResize);
            buttons.forEach(button => {
                button.removeEventListener('click', () => handleButtonClick(button));
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
                    <div id="side" className="w-full xl:w-auto pe-4">
                        {/* Burger menüsü */}
                        <i
                            id="burger"
                            className={`fa-solid fa-bars text-white text-4xl block ${isSidebarOpen ? 'active' : ''}`}
                            onClick={toggleSidebar}
                        ></i>
                    </div>
                    {isSidebarOpen ? (
                        <div id="sidebar" className="xl:pt-0 xl:px-0 pt-20 xl:pb-0 pb-5 px-4 text-normal rounded-b-lg">
                            <a className="link-underline link-underline-opacity-0 text-white font-semibold px-4 py-2 text-center xl:text-start" href="#hero">Home</a>
                            <a className="link-underline link-underline-opacity-0 text-white font-semibold px-4 py-2 text-center xl:text-start" href="#classes">Classes</a>
                            <a className="link-underline link-underline-opacity-0 text-white font-semibold px-4 py-2 text-center xl:text-start" href="#trainer">Trainer</a>
                            <a className="link-underline link-underline-opacity-0 text-white font-semibold px-4 py-2 text-center xl:text-start" href="#review">Review</a>
                            <a className="link-underline link-underline-opacity-0 text-white font-semibold px-4 py-2 text-center xl:text-start" href="#contact">Contact</a>
                            <a className="link-underline link-underline-opacity-0 text-white font-semibold px-4 py-2 xl:px-2 px-4 rounded text-center xl:text-start" href="#">JOIN US</a>
                        </div>
                    ) : (
                        <div
                            id="sidebar"
                            className="xl:pt-0 xl:px-0 pt-20 xl:pb-0 pb-5 px-4 text-normal rounded-b-lg"
                            style={{
                                backgroundColor: "var(--navBg)",
                                position: "absolute",
                                width: "45%",
                                height: "auto",
                                zIndex: 15,
                                right: 0,
                                top: 0,
                                transition: "all 1s ease",
                                opacity: 1,
                                fontSize: "24px",
                                overflow: "auto",
                                display: "block",
                            }}
                        >
                            <div id="navbar">
                                <div id="menu">
                                    <a
                                        className="link-underline link-underline-opacity-0 text-white font-semibold px-4 py-2 text-center xl:text-start"
                                        href="#hero"
                                        style={{ display: "flex", flexDirection: "column" }}
                                    >
                                        Home
                                    </a>
                                    <a
                                        className="link-underline link-underline-opacity-0 text-white font-semibold px-4 py-2 text-center xl:text-start"
                                        href="#classes"
                                        style={{ display: "flex", flexDirection: "column" }}
                                    >
                                        Classes
                                    </a>
                                    <a
                                        className="link-underline link-underline-opacity-0 text-white font-semibold px-4 py-2 text-center xl:text-start"
                                        href="#trainer"
                                        style={{ display: "flex", flexDirection: "column" }}
                                    >
                                        Trainer
                                    </a>
                                    <a
                                        className="link-underline link-underline-opacity-0 text-white font-semibold px-4 py-2 text-center xl:text-start"
                                        href="#review"
                                        style={{ display: "flex", flexDirection: "column" }}
                                    >
                                        Review
                                    </a>
                                    <a
                                        className="link-underline link-underline-opacity-0 text-white font-semibold px-4 py-2 text-center xl:text-start"
                                        href="#contact"
                                        style={{ display: "flex", flexDirection: "column" }}
                                    >
                                        Contact
                                    </a>
                                    <a
                                        className="link-underline link-underline-opacity-0 text-white font-semibold px-4 py-2 xl:px-2 px-4 rounded text-center xl:text-start"
                                        href="#"
                                        style={{ display: "flex", flexDirection: "column" }}
                                    >
                                        JOIN US
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;