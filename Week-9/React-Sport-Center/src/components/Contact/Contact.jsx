const Contact = () => {
    return (
        <section id="contact" className="w-full class">
            <div className="container mx-auto">
                <article>
                    <section className="class-title">
                        <h3 className="">CONTACT US</h3>
                        <div className="class-line"></div>
                        <p className="">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore ex explicabo dolorem asperiores quas distinctio repellat illo blanditiis placeat aperiam.
                        </p>
                    </section>
                </article>
                <article className="flex xl:flex-row flex-col pb-32 gap-10">
                    <section className="flex-1 xl:mx-0 xl:mx-auto xl:px-0 px-10">
                        <div className="demo flex gap-4">
                            <div>
                                <h6>Mobile Number</h6>
                                <p>+135 773 321 4442</p>
                            </div>
                            <div>
                                <h6>Email Address</h6>
                                <p>demo@demo.com</p>
                            </div>
                        </div>
                        <div id="form" className="flex flex-col gap-6 mt-6">
                            <h6>Make An Appointment</h6>
                            <input type="text" placeholder="Your Name" className="p-2 border rounded" />
                            <input type="text" placeholder="Your Email" className="p-2 border rounded" />
                            <textarea id="textarea" rows="7" maxLength="250" placeholder="Your Message" className="p-2 border rounded"></textarea>
                        </div>
                    </section>
                    <section className="flex-1 mx-4 xl:mt-0 mt-6">
                        <div className="h-full">
                            <iframe
                                className="w-full h-full"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274261160215!2d-70.56336611027636!3d41.454966517787845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1ses!2str!4v1735919374240!5m2!1ses!2str"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </section>
                </article>
            </div>
        </section>
    );
};

export default Contact;
