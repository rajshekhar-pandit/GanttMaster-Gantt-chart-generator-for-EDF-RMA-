# GanttMaster - Gantt Chart Generator for EDF & RMA Algorithms 🎯

## Overview
GanttMaster is a web-based tool designed to **generate Gantt charts** for **Earliest Deadline First (EDF)** and **Rate Monotonic Algorithm (RMA)** scheduling algorithms. It allows users to visualize scheduling decisions in real-time, making it easier to understand the behavior of both algorithms.

The project includes:
- **Front-end**: HTML, CSS, JavaScript for UI and Gantt chart generation  
- **Back-end logic**: JavaScript-based real-time scheduling algorithms (EDF & RMA)  
- **Interactive controls**: Set process arrival time with sliders and choose the number of processes dynamically.

---

## Features
- 🎛 **Set Arrival Time** using an interactive **slider** for each process.
- 🔢 **Choose the Number of Processes** dynamically.
- 🗓 **EDF and RMA Algorithms**: Generate real-time Gantt charts using both scheduling strategies.
- 🌈 **Color-coded Gantt Chart**: Each process block is represented with a unique color.
- 🔗 **Dynamic Process Visualization**: No breaks between processes in the Gantt chart.
- 🕒 **Display Arrival and End Times** for each process below the chart.
- 📊 **Horizontal Gantt Chart Layout** with smooth transitions between process blocks.

---

## Getting Started

### Open the Project in VS Code or any IDE
1. Open the project folder in **VS Code** or any IDE of your choice.

### Launch the Application
- Simply open `index.html` in any web browser.

---

## Usage
1. Set the **number of processes** you want to visualize in the Gantt chart.
2. Use the **arrival time slider** to set individual process arrival times.
3. Choose between **EDF** or **RMA** scheduling algorithms.
4. Click **Generate Gantt Chart** to visualize the results.
5. Observe the **arrival and end times** of each process below the chart.

---

## Project Structure
GanttMaster/ │ ├── index.html # Main HTML file ├── style.css # CSS for styling ├── script.js # JavaScript logic for EDF and RMA algorithms ├── README.md # Project documentation (this file) └── LICENSE # License information (optional)

yaml
Copy code

---

## Technologies Used
- **HTML5**: Structure of the webpage  
- **CSS3**: Styling the UI and Gantt chart  
- **JavaScript**: Implementing EDF and RMA algorithms, real-time chart generation  

---

## Contributing
Contributions are welcome! If you'd like to improve the project, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature-branch
Commit your changes:
bash
Copy code
git commit -m "Add some feature"
Push to the branch:
bash
Copy code
git push origin feature-branch
Open a pull request.
Known Issues
🛠 No database integration: Currently, the application is entirely frontend-based.
💡 Algorithm performance: The chart may need optimizations for very large inputs.
Future Enhancements
Add deadline constraints for better EDF visualizations.
Implement priority inversion handling.
Export Gantt charts as PDF or PNG.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
If you have any questions, feel free to reach out:

GitHub: rajshekhar-pandit
Email: pandeyrajshekhar63@gmail.com
Screenshots
(Optional – Add screenshots of the UI or Gantt charts here)

Enjoy using GanttMaster! 🎉

yaml
Copy code

---

This version will render properly on GitHub or any Markdown viewer. Just copy it into your `README.md` file, and it w
