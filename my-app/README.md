# Web Development Skills Showcase

A beautiful, responsive React application that visually showcases various web development skills and technologies. 

## 🌟 Features

- **Interactive UI Cards**: Displays different skills (React, TypeScript, Animations, etc.) in a visually appealing grid of custom cards.
- **Dynamic Modal Component**: Clicking on any card opens a custom Modal component for expanded details and imagery, providing a seamless user experience.
- **Modern Aesthetics**:
  - Beautiful, dynamic blue-to-green gradient background.
  - Fully responsive design that effortlessly adapts to mobile, tablet, and desktop screens.
  - Custom CSS properties with support for light and dark color schemes.

## 🛠️ Technologies Used

- **React & Vite**: For an ultra-fast modern development environment and component-based architecture.
- **Vanilla CSS**: Custom styling with CSS variables, flexbox, and modern gradient backgrounds.

## 🚀 Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Navigate to the project directory:
   ```bash
   cd my-app
   ```
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and visit `http://localhost:5173/`.

## 📁 Project Structure

- **`src/App.jsx`** - The foundational parent component managing state (Modal visibility) and mapping data to cards.
- **`src/components/Card.jsx`** - Custom, reusable UI Card component showing a snapshot of a skill.
- **`src/Modal/Modal.jsx`** - Custom modal overlay that dynamically displays content based on the selected skill.
- **`src/index.css`** - Global definitions including background gradients, color variables, and basic resets.

---

*This application was built as an exploration into React components, conditional rendering, and refined CSS styling.*
