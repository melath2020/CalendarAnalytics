# CalendarAnalytics
React-based application that visualizes date-wise data using React Big Calendar and bar graphs. It highlights dates with available data and displays detailed insights in a popup when a date is selected.

Features

Month / Week / Day views using React Big Calendar

Dummy JSON data mapped date-wise

Highlighted dates with available data

Highlighted selected date

Popup modal on date click

Bar graph representation of selected date data

Warning message for dates with no data

Global state management using Redux

Cross-browser and cross-OS compatible


**Tech Stack**

React

Redux Toolkit

React Big Calendar

Chart.js / Recharts (Bar Graph)

date-fns / moment

Project Structure

src/
├── components/
│ ├── CalendarView.jsx
│ ├── DataModal.jsx
│ └── BarChart.jsx
├── redux/
│ ├── store.js
│ └── calendarSlice.js
├── data/
│ └── dummyData.json
├── utils/
│ └── dateUtils.js
├── App.jsx
└── index.js

Installation & Setup
1. Clone the repository
git clone <your-repo-url>
cd filename

2. Install dependencies
npm install

3. Start the application
npm start

The app will run on:

http://localhost:3000

version 0.0.3