# Analytical Dashboard

![image](https://github.com/user-attachments/assets/01ff6e9a-774b-4d13-bdac-6304eb6de34f)


## Overview
This is an analytical dashboard built using **React**, **Recharts**, **Framer Motion**, and **Tailwind CSS**. It provides insightful data visualization, including pie charts, bar graphs, and other interactive components.

[Link To the Website](https://analytical-dashboard-sypher.netlify.app/)

## Features
- 📊 **Data Visualization**: Uses `Recharts` for interactive graphs.
- 🎭 **Framer Motion**: Smooth animations for a modern UI.
- 🎨 **Tailwind CSS**: Styled for a sleek and responsive design.
- 🚀 **Performance Optimized**: Uses best practices for fast rendering.
- 📡 **State Management**: Data fetching and state management via a global store.

## Technologies Used
- **React.js** (with Vite for fast development)
- **Recharts** (for visualizing data)
- **Framer Motion** (for smooth animations)
- **Tailwind CSS** (for styling)

## Installation
To run the project locally, follow these steps:

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/analytical-dashboard.git
cd analytical-dashboard
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start Development Server
```sh
npm run dev
```

The project will run at `http://localhost:5173/`.

## Folder Structure
```
📂 analytical-dashboard
├── 📁 src
│   ├── 📁 components  # Reusable UI components
│   ├── 📁 pages       # Page views
│   ├── 📁 store       # Global state management
│   ├── 📁 assets      # Images and static files
│   ├── 📄 main.jsx    # Root file
│   ├── 📄 App.jsx     # Main component
├── 📄 package.json    # Project dependencies
├── 📄 README.md       # Project documentation
```

## Key Components
- **`TrendsPage.jsx`**:  
  - Contains two vertical bar charts:  
    - **EV Registration Trends**: Showcases EV adoption patterns in the top 10 cities over the years.  
    - **EV Manufacturer Growth Trends**: Highlights production changes of top EV manufacturers over time.  

- **`AnalyticsPage.jsx`**:  
  - Displays key insights with multiple charts:  
    - **Top 10 Cities with Most EVs**  
    - **EV Distribution by Country**  
    - **Top 10 EV Manufacturers by Production**  
    - **Area Chart**: Yearly EV production trends categorized by brand.  

- **`store/fetchAll.js`**: Handles API requests and manages global state using Zustand.  

## License
MIT License © 2025 Your Name

