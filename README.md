# Analytical Dashboard

![Dashboard Preview](https://analytical-dashboard-sypher.netlify.app/preview.png)

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
- **`Cafv.jsx`**: Displays the CAFV-eligible vehicle distribution using a pie chart.
- **`Dashboard.jsx`**: Main dashboard component containing multiple visualizations.
- **`fetchAll.js`**: Manages API requests and state handling.

## Deployment
The project is deployed on **Netlify**. To deploy:
```sh
git push origin main
```
Netlify will automatically build and deploy the latest changes.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

## License
MIT License © 2025 Your Name

