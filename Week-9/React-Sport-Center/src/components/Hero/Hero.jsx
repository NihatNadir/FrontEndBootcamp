function Hero( { navbarHeight } ){
    return (
        <section id="hero" className="w-full py-8" style={{ marginTop: '-87px' }}>
        <article className="container xl:mx-auto text-white py-14 px-4">
            <h1 
            style={{ backgroundColor: "var(--navBg)" }}
            className="inline px-2 py-1 text-white rounded-lg text-xl font-bold">POWERFULL</h1>
            <h2 className="text-4xl xl:text-8xl font-extrabold xl:tracking-wide xl:my-2">Group <span className="xl:block">Practice</span>  
                <span className="block">With Trainer</span></h2>
            <p className="text-2xl bg-black bg-opacity-65 px-4 py-2 font-semibold">Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
                Pariatur eaque, et quia iure tenetur accusantium dolorem architecto vero numquam aut fuga
                molestias ipsum ex perspiciatis enim? Fuga pariatur provident facere.</p>
            <div className="xl:mx-6 my-3 flex xl:flex-row flex-col xl:gap-8 gap-2">
                <button 
                style={{ backgroundColor: "var(--navBg)" }}
                className="text-white px-6 py-2 font-semibold text-lg rounded-lg"
                
                >Sign Up</button>
                <button className="text-white px-6 py-2 font-semibold text-lg rounded-lg border-solid border-2 border-white bg-black bg-opacity-65">Details</button>
            </div>
        </article>
    </section>
    )
}
export default Hero;