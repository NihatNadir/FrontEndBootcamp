const ReviewSection = () => {
    return (
      <section id="review" className="w-full class" style={{ backgroundColor: "#F1F8FF" }}>
        <article className="container mx-auto">
          <section className="class-title">
            <h3 className="">REVIEW CLIENT</h3>
            <div className="class-line"></div>
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
              ex explicabo dolorem asperiores quas distinctio repellat illo
              blanditiis placeat aperiam.
            </p>
          </section>
  
          <section className="client pb-32">
            <div className="flex xl:flex-row flex-col gap-20 xl:mx-0 mx-4">
              <ClientCard
                imageSrc="../images/client1.jpg"
                name="Diet Expert"
                position="CFO"
                review="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, ullam ex totam autem, provident quis natus fugiat aperiam dicta obcaecati quia earum voluptatibus quisquam. Aperiam nemo aut obcaecati inventore. Sunt!"
              />
              <ClientCard
                imageSrc="../images/client2.jpg"
                name="Cardio Trainer"
                position="CEO"
                review="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, ullam ex totam autem, provident quis natus fugiat aperiam dicta obcaecati quia earum voluptatibus quisquam. Aperiam nemo aut obcaecati inventore. Sunt!"
              />
            </div>
          </section>
        </article>
      </section>
    );
  };
  
  const ClientCard = ({ imageSrc, name, position, review }) => {
    return (
      <div className="flex flex-col gap-4 client-container">
        <div className="flex gap-4">
          <img className="size-16 rounded-full" src={imageSrc} alt={name} />
          <div className="client-title">
            <h6>{name}</h6>
            <p>{position}</p>
          </div>
        </div>
        <div className="client-content">
          <p>{review}</p>
        </div>
      </div>
    );
  };
  
  export default ReviewSection;