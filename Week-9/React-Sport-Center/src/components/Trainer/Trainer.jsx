const TrainersSection = () => {
    const trainers = [
      { id: 1, name: "Jane Doe", role: "Cardio Trainer", image: "/images/trainer1.jpg" },
      { id: 2, name: "John Doe", role: "Cardio Trainer", image: "/images/trainer2.jpg" },
      { id: 3, name: "Jane Doe", role: "Cardio Trainer", image: "/images/trainer3.jpg" }
    ];
  
    return (
      <section id="trainer" className="w-full bg-[#F1F8FF]">
        <article className="container mx-auto">
          <section className="class-title">
            <h3 className="text-2xl font-bold">OUR BEST TRAINERS</h3>
            <div className="class-line w-20 h-1 bg-blue-500 mx-auto my-2"></div>
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore ex explicabo dolorem asperiores quas distinctio repellat illo blanditiis placeat aperiam.
            </p>
          </section>
          <div id="trainer-container" className="flex xl:flex-row flex-col pb-20 gap-20 xl:gap-28 justify-between mx-16 my-4">
            {trainers.map((trainer) => (
              <div key={trainer.id} className="trainer-images image-box flex-1 relative">
                <img className="w-full rounded-lg" src={trainer.image} alt={trainer.name} />
                <div className="top-box"></div>
                <div className="left-box"></div>
                <div className="right-box"></div>
                <div className="bottom-box"></div>
                <div className="trainer-box"></div>
                <div className="trainer-text">
                  <p className="trainer-title">{trainer.name}</p>
                  <p className="trainer-subtitle">{trainer.role}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    );
  };
  
  export default TrainersSection;
  