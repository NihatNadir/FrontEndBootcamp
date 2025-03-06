function Stats() {
    return (
        <section id="stats" 
    style={{backgroundColor: "#F1F8FF"}}
    className="z-15 py-8 w-full justify-center flex h-1/6" 
    >
        <article className="container justify-center">
            <div className="flex xl:flex-row flex-col gap-6 xl:mx-0 mx-20">
                <div className="flex-1 bg-white rounded-lg flex flex-col items-center justify-evenly pb-6 pt-2">
                    <p 
                    style={{ color: "var(--navBg)" }}
                    className="xl:text-2xl text-3xl xl:font-bold font-extrabold pb-2">325</p>
                    <p
                    style={{ color: "var(--textColor)" }}
                    className="xl:text-xl text-2xl xl:font-bold font-extrabold">Course</p>
                </div>
                <div className="flex-1 bg-white rounded-lg flex flex-col items-center justify-evenly pb-6 pt-2">
                    <p
                    style={{ color: "var(--navBg)" }}
                    className="xl:text-2xl text-3xl xl:font-bold font-extrabold pb-2">405</p>
                    <p
                    style={{ color: "var(--textColor)" }}
                    className="xl:text-xl text-2xl xl:font-bold font-extrabold">Work Out</p>
                </div>
                <div className="flex-1 bg-white rounded-lg flex flex-col items-center justify-evenly pb-6 pt-2">
                    <p
                    style={{ color: "var(--navBg)" }}
                    className="xl:text-2xl text-3xl xl:font-bold font-extrabold pb-2">305</p>
                    <p
                    style={{ color: "var(--textColor)" }} 
                    className="xl:text-xl text-2xl xl:font-bold font-extrabold">Working Hour</p>
                </div>
                <div className="flex-1 bg-white rounded-lg flex flex-col items-center justify-evenly pb-6 pt-2">
                    <p
                    style={{ color: "var(--navBg)" }}
                    className="xl:text-2xl text-3xl xl:font-bold font-extrabold pb-2">705</p>
                    <p
                    style={{ color: "var(--textColor)" }} 
                    className="xl:text-xl text-2xl xl:font-bold font-extrabold">Happy Client</p>
                </div>
            </div>
        </article>
    </section>
    )    
}
export default Stats;