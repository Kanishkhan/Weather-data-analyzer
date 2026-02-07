# 🌦️ Weather Data Analyzer

## 📌 Project Overview
**Weather Data Analyzer** is a dual-implementation project (Python & JavaScript) designed to analyze historical weather data, visualize climate trends, and predict future temperatures using Machine Learning (Linear Regression).

This project demonstrates data analysis and visualization capabilities in both:
1.  **Python**: Using `Pandas`, `Matplotlib`, and `Scikit-learn` for backend data processing and static plotting.
2.  **Web (JavaScript)**: Using `Chart.js` for interactive frontend visualizations and client-side regression analysis.

---

## 🚀 Features

### 📊 Data Analysis & Visualization
-   **Temperature Trends**: Tracks temperature changes over the years (2000-2024).
-   **Rainfall Distribution**: Bar charts showing yearly rainfall (mm).
-   **Correlation Analysis**: Scatter plot for `Humidity` vs. `Temperature`.
-   **Trend Prediction**: Linear Regression model to forecast future temperature trends.

### 🧠 Machine Learning Integration
-   **Linear Regression Model**:
    -   Python: `scikit-learn` creates a predictive model for temperature.
    -   JavaScript: Custom implementation of the Least Squares method.
-   **Model Evaluation**:
    -   Calculates **MSE (Mean Squared Error)**.
    -   Calculates **RMSE (Root Mean Squared Error)**.

---

## 🛠️ Technology Stack

### **Python Implementation**
-   **Language**: Python 3.x
-   **Libraries**:
    -   `pandas` (Data Manipulation)
    -   `numpy` (Numerical Computations)
    -   `matplotlib` (Data Visualization)
    -   `scikit-learn` (Machine Learning)

### **Web Implementation**
-   **Frontend**: HTML5, CSS3, JavaScript (ES6+)
-   **Visualization**: Chart.js (Interactive Charts)
-   **Styling**: Glassmorphism UI (CSS)

---

## 📂 Project Structure

```bash
Weather-data-analyzer/
│
├── main.py          # Python script for analysis & plotting
├── index.html       # Main HTML file for Web Interface
├── style.css        # CSS for styling (Glassmorphism effect)
├── script.js        # JavaScript logic (Data, Regression, Charts)
└── README.md        # Project Documentation
```

---

## 🔧 Installation & Usage

### 1️⃣ Python Version
Ensure you have Python installed. Then, install the required dependencies:

```bash
pip install pandas numpy matplotlib scikit-learn
```

Run the analysis script:

```bash
python main.py
```
*This will generate and display 4 distinct charts using Matplotlib.*

### 2️⃣ Web Version
Simply open `index.html` in any modern web browser to view the interactive dashboard.

OR, if you use VS Code with Live Server:
-   Right-click `index.html` -> **"Open with Live Server"**.

---

## 📈 Visualizations
The project generates the following insights:
1.  **Temperature vs. Year** (Line Chart)
2.  **Rainfall vs. Year** (Bar Chart)
3.  **Humidity vs. Temperature** (Scatter Plot)
4.  **Actual vs. Predicted Temperature** (Regression Line)

---

## 🤝 Contributing
Contributions are welcome! Feel free to:
1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature-branch`).
3.  Commit your changes.
4.  Push to the branch and open a Pull Request.

---

## 📬 Contact
Created by **Kanishkhan**.
-   **GitHub**: [Kanishkhan](https://github.com/Kanishkhan)
-   **Repository**: [Weather-data-analyzer](https://github.com/Kanishkhan/Weather-data-analyzer)
