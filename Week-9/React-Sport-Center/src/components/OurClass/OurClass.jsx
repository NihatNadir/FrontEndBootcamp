import { useState, useEffect } from "react";

const classData = {
  yoga: {
    title: "Why are your Yoga?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero tenetur consectetur reprehenderit officiis sit veritatis totam, labore impedit quae quos quasi nulla voluptas quisquam quam sequi provident ipsam quidem nobis.",
    schedule: [
      "Saturday-Sunday: 8:00am - 10:00am",
      "Monday-Tuesday: 10:00am - 12:00pm",
      "Wednesday-Friday: 3:00pm - 6:00pm",
    ],
    image: "/images/yoga.jpg",
  },
  group: {
    title: "Why are your Group?",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsum illum similique et quod? Alias nihil necessitatibus iste dolorum esse quos possimus culpa non dolore voluptas? Illo pariatur iure id.",
    schedule: [
      "Saturday-Sunday: 10:00am - 12:00pm",
      "Monday-Tuesday: 12:00pm - 2:00pm",
      "Wednesday-Friday: 6:00pm - 8:00pm",
    ],
    image: "/images/group.webp",
  },
  solo: {
    title: "Why are your Solo?",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque illum fuga nesciunt exercitationem cum animi placeat. Quasi, nam corporis modi repellendus provident beatae porro ipsam aut atque dolore? Deserunt, repellat.",
    schedule: [
      "Saturday-Sunday: 12:00pm - 2:00pm",
      "Monday-Tuesday: 2:00pm - 4:00pm",
      "Wednesday-Friday: 8:00pm - 10:00pm",
    ],
    image: "/images/solo.jpg",
  },
  stretching: {
    title: "Why are your Stretching?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis explicabo itaque consequuntur tempora aut, sed molestiae quisquam numquam corrupti qui veniam temporibus veritatis magni? Saepe sequi reprehenderit quidem est praesentium!",
    schedule: [
      "Saturday-Sunday: 3:00pm - 5:00pm",
      "Monday-Tuesday: 4:00pm - 6:00pm",
      "Wednesday-Friday: 10:00am - 12:00pm",
    ],
    image: "/images/stret.webp",
  },
};

const ClassesSection = () => {
  const [selectedClass, setSelectedClass] = useState("yoga");

  const { title, description, schedule, image } = classData[selectedClass];

  const handleClassSelect = (key) => {
    setSelectedClass(key);
  };

  const addEffect = (button) => {
    removeEffect(button);
    const effect = document.createElement("div");
    effect.classList.add("effect");
    button.appendChild(effect);
  };

  const removeEffect = (button) => {
    const existingEffect = button.querySelector(".effect");
    if (existingEffect) {
      existingEffect.remove();
    }
  };

  useEffect(() => {
    // Sayfa ilk yüklendiğinde yoga seçili olmalı, state zaten bu şekilde ayarlanmış.
  }, []); // Burada ek bir işlem yapılmasına gerek yok, sadece selectedClass'ın ilk değerine odaklanıyoruz.

  return (
    <section id="classes" className="section w-full">
      <article className="container mx-auto">
        <section className="class-title text-center">
          <h3 className="text-xl font-bold">OUR CLASSES</h3>
          <div className="class-line w-16 h-1 bg-gray-700 mx-auto my-2"></div>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            ex explicabo dolorem asperiores quas distinctio repellat illo
            blanditiis placeat aperiam.
          </p>
        </section>

        <div className="flex xl:flex-nowrap flex-wrap items-center justify-evenly my-6">
          {Object.keys(classData).map((key) => (
            <button
              key={key}
              id={key}
              onClick={(e) => {
                handleClassSelect(key);
                const activeButton = document.querySelector(".button.active");
                if (activeButton) {
                  activeButton.classList.remove("active");
                  removeEffect(activeButton);
                }
                e.target.classList.add("active");
                addEffect(e.target);
              }}
              className={`button xl:px-6 xl:py-2 px-1 py-3 rounded-lg xl:w-auto w-[35%] ${
                selectedClass === key ? "bg-orange-500 text-white" : "bg-gray-300"
              }`}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex xl:flex-row flex-col">
          <div className="flex flex-col flex-1 gap-6 xl:px-20 px-2 order-1">
            <div>
              <h4 className="text-lg font-semibold mb-2">{title}</h4>
              <p className="text-gray-700">{description}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Class Schedule</h4>
              {schedule.map((time, index) => (
                <p key={index} className="text-gray-700 my-2">
                  {time}
                </p>
              ))}
            </div>
          </div>
          <div className="flex-1 h-full xl:p-20 order-2">
            <img className="w-full h-auto class-image" src={image} alt={title} />
          </div>
        </div>
      </article>
    </section>
  );
};

export default ClassesSection;