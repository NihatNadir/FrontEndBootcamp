# Fitness and Health Application

### [Visit Project](https://incredible-pixie-a96801.netlify.app/)

This project is a responsive web application designed to help users track their Body Mass Index (BMI) and explore various fitness programs. It leverages Tailwind CSS for styling and JavaScript for dynamic functionalities.

## Features

- **Responsive Design**: The layout adjusts seamlessly across different screen sizes.
- **BMI Calculator**: Users can calculate their BMI based on height (cm) and weight (kg).
- **Dynamic Content Switching**: Explore different fitness programs like Yoga, Group Workouts, Solo Workouts, and Stretching, with updated schedules and images.
- **Navigation Sidebar**: A collapsible sidebar for mobile and desktop navigation.
- **Scroll Effects**: Dynamic navbar styling based on scroll position.

## Tools and Technologies

- **React**: For building dynamic user interfaces and managing state.
- **Tailwind CSS**: To enhance styling with utility-first CSS.
- **JavaScript (ES6)**: For interactivity and dynamic functionalities.
- **HTML5**: For structuring the application.
- **CSS3**: For basic styling.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NihatNadir/FrontEndBootcamp.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Week-9/React-Sport-Center
   ```

3. Open `index.html` in your preferred browser to view the application.

## Usage

### BMI Calculator
1. Enter your height (in cm) and weight (in kg) into the respective input fields.
2. The BMI indicator dynamically updates to reflect the calculated value and its position on the scale.

### Fitness Programs
- Click on one of the buttons (e.g., Yoga, Group, Solo, Stretching) to:
  - Change the displayed image.
  - Update the content describing the program.
  - See the updated schedule.

### Sidebar Navigation
- Click on the burger button to toggle the sidebar visibility.
- The sidebar adapts its visibility automatically based on screen size.

## Code Highlights

### Navbar Scroll Effect
Dynamic background color adjustment based on scroll position:
```javascript
function scroll() {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "var(--navBg)";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
}
window.addEventListener('scroll', scroll);
```

### BMI Calculator
Dynamic BMI indicator updates based on user input:
```javascript
const updateBMIIndicator = () => {
    const cmValue = parseFloat(cm.value);
    const kgValue = parseFloat(kg.value);

    if (!cmValue || !kgValue || cmValue <= 0 || kgValue <= 0) {
        console.warn("Lütfen geçerli bir boy ve kilo giriniz.");
        return;
    }

    const heightInMeters = cmValue / 100;
    const bmi = (kgValue / (heightInMeters ** 2)).toFixed(1);

    const minBMI = 10;
    const maxBMI = 40;
    const leftPercentage = 10 + ((bmi - minBMI) / (maxBMI - minBMI)) * 80;

    calculateIndicator.style.left = `${Math.min(Math.max(leftPercentage, 10), 90)}%`;
    container.style.display = "block";
};
```

## Future Enhancements
- Integration with a backend service to store user data.
- More fitness programs and personalized recommendations.
- Enhanced accessibility features.


**Note**: Tailwind CSS is used for styling. Make sure to include the Tailwind CSS file in your project for proper functionality.