# Star Wars Themed Project

## 🚀 Project Overview

This is a Star Wars themed web application built with React. The application allows users to search for starships, view details, and explore various aspects of the Star Wars universe with a unique design inspired by the franchise.

## 📌 Features

1. Star Wars themed UI with custom fonts and colors.

2. Search functionality to find starships by Name or Model.

3. Detailed starship information displayed in a structured format.

4. Smooth animations & transitions for better user experience.

5. Custom styles using Tailwind CSS and additional CSS enhancements.

## 🛠️ Tech Stack

1. Frontend: React, Vite

2. State Management: Context API

3. Routing: React Router V5

4. Styling: Custom fonts, CSS enhancements

## 🎨 UI Design Choices

1. Background Gradient: #141623 to #493439

2. Home Card Background: #111423

3. Shadows & Borders: Soft edges with #747162 and #252834

4. Star Wars Font: "Star Jedi" (added manually)

## 🔧 Installation & Setup

1. Clone the repository
   ```bash
   git clone https://github.com/NihatNadir/FrontEndBootcamp.git

2. Navigate to the project directory:
   ```bash
   cd FrontEndBootcamp/Week-12/Star-Wars   

3. Install dependencies
npm install

4. Start the development server
npm run dev

5. Open the project in your browser
http://localhost:5173

## 🔍 Search Feature

1. Users can search for starships using Name/Model.

2. A search input with a placeholder "Name / Model".

3. A Filter button next to the search input.

4. A bordered line appears below the search input using ::after.

## 📂 Folder Structure

├── public
│   ├── Starjedi.ttf  # Custom Star Wars Font
│   |  
├── src
│   ├── components
│   │   ├── Card.jsx
|   |
│   ├── pages
│   │   ├── Home
|   |   |   ├── Home.jsx
|   |   |   ├── Home.css
│   │   ├── Detail.jsx
|   |   |   ├── Detail.jsx
|   |   |   ├── Detail.css
|   |   |
│   ├── context
│   │   ├── StarshipContext.jsx
|   |   |
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
├── README.md
├── package.json

## 🛠 Custom Styling

1. Star Wars Font Implementation

2. To use the Star Jedi font, follow these steps:

3. Download the font from dafont.com.

4. Place the Starjedi.ttf file inside public/.

5. Add the following to your styles.css:

   ```bash

@font-face {
    font-family: 'Star Jedi';
    src: url('/Starjedi.ttf') format('truetype');
}
.title {
    font-family: 'Star Jedi', sans-serif;
}

6. Search Bar Border with ::after

   ```bash

.search-container::after {
    content: "";
    display: block;
    width: 50%;
    height: 4px;
    background-color: #C1BFDF;
    position: absolute;
    left: 50%;
    bottom: -8px;
    transform: translateX(-50%);
    border-radius: 2px;
}

