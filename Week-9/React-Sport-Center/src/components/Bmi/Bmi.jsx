import { useState, useEffect, useRef } from "react";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const indicatorRef = useRef(null);
  const containerRef = useRef(null);

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);
      updateBMIIndicator(bmiValue);
    }
  };

  const updateBMIIndicator = (bmiValue) => {
    if (!indicatorRef.current || !containerRef.current) return;

    const minBMI = 10;
    const maxBMI = 40;
    let leftPercentage = 10 + ((bmiValue - minBMI) / (maxBMI - minBMI)) * 80;

    if (leftPercentage < 10) leftPercentage = 10;
    if (leftPercentage > 90) leftPercentage = 90;

    indicatorRef.current.style.left = `${leftPercentage}%`;
    containerRef.current.style.display = "block";
  };

  useEffect(() => {
    if (height && weight) {
      calculateBMI();
    }
  }, [height, weight]);

  return (
    <section id="bmi" className="p-10">
      <article className="container mx-auto flex xl:flex-row flex-col gap-10 xl:gap-40">
        <div className="xl:flex-1 xl:w-6/12 w-auto flex flex-col justify-between xl:gap-10 gap-4">
          <h3 className="text-xl font-bold">BMI Calculator</h3>
          <p>
            Calculate your Body Mass Index (BMI) to understand your health better.
          </p>
          <div className="flex xl:flex-row flex-col gap-4 xl:items-center items-start">
            <div>
              <input
                className="border p-2 w-full"
                type="number"
                placeholder="Your Height (cm)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div>
              <input
                className="border p-2 w-full"
                type="number"
                placeholder="Your Weight (kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={calculateBMI}
            >
              Calculate
            </button>
          </div>
          {bmi && <p className="font-bold">Your BMI: {bmi}</p>}
          <div ref={containerRef} className="hidden relative mt-4 w-full h-6 bg-gray-200 rounded">
            <div ref={indicatorRef} className="absolute top-0 h-6 w-2 bg-red-500" style={{ left: "10%" }}></div>
          </div>
        </div>
        <div className="image flex-1 xl:w-6/12 w-auto justify-center flex flex-col">
          <p className="text-center font-semibold">Your BMI</p>
          <img className="h-full" src="./images/bmi-index.jpg" alt="BMI Index" />
        </div>
      </article>
    </section>
  );
};

export default BMICalculator;
