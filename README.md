
---

# Tab Monitoring React Application

This project is a React application that monitors user behavior on the page and restricts certain actions, such as switching tabs, right-clicking, and copying content.

## Features

- **Tab Monitoring**: Alerts the user when they attempt to switch to another tab.
- **Right-Click Blocking**: Disables the right-click functionality on the webpage.
- **Copy Prevention**: Prevents users from copying any content from the page.

---

## Available Scripts

In the project directory, you can run:

### `npm start`

- Starts the app in development mode.  
- Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.
- The page reloads whenever you make edits.  
- You may also see linting errors in the console if applicable.

---

## Project Structure

```
tab-monitoring/
├── public/
│   ├── index.html          # HTML template
│   ├── favicon.ico         # Favicon for the app
├── src/
│   ├── components/
│   │   └── TabMonitor.js   # Core functionality
│   ├── App.js              # Root component
│   ├── index.js            # Entry point for the React app
│   ├── index.css           # Global CSS
│   └── reportWebVitals.js  # Performance monitoring
├── .gitignore              # Git ignored files
├── package.json            # Project metadata and dependencies
├── README.md               # Documentation (this file)
```

---

## How to Run

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/vivek-pandit/tab-monitoring.git
   cd tab-monitoring
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

4. **Build for production** (optional):
   ```bash
   npm run build
   ```

---


## Author

- **Name**: Vivek Pandit
- **GitHub**: [vivek-pandit](https://github.com/vivek-pandit)

---
## License

This project is licensed under the MIT License. Feel free to use and modify as needed.

---
