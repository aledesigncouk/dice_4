# Random Walk Simulation Using D3.js
![dice_4](https://github.com/user-attachments/assets/43f059da-b9f3-4182-9d62-54bed3b8f9d4)

### Project Description:
This project simulates a random walk in a 2D plane, inspired by the behavior of a 4-faced die. The simulation randomly chooses one of four possible directions (up, down, left, or right) in each step, and tracks the path of the movement over a series of 1000 steps. The path is visualized on an interactive graph using D3.js, a powerful JavaScript library for data visualization.

The simulation represents the random walk as a sequence of points that are plotted on a Cartesian coordinate system. Each step of the random walk is determined by the outcome of a simulated 4-sided die roll, with the possible moves being:

- **Up** (increasing the y coordinate)
- **Down** (decreasing the y coordinate)
- **Left** (decreasing the x coordinate)
- **Right** (increasing the x coordinate)

The outcome of each roll determines the movement of the "walker," with the current position updated accordingly. As a result, the path of the walk is a random sequence of movements that form a continuous trajectory across the graph.

#### Key Features:
**Random Walk Simulation:** The movement follows a random process similar to rolling a 4-sided die, where each roll randomly dictates the direction of movement on a 2D plane.
**Data Generation:** The code generates 1000 random steps, and each step results in a change of coordinates (x, y) based on one of the four directions.
**Interactive Graph:** Using D3.js, the project visualizes the random walk as a series of points (circles) connected by a path. This creates an interactive visualization that helps to understand the behavior of a random walk.
**Dynamic Axis Scaling:** The graph dynamically scales the x and y axes to fit the values generated during the random walk, ensuring that the entire path is visible within the SVG canvas.

#### Technologies Used:
**D3.js:** A JavaScript library used to bind data to a document and create dynamic, interactive visualizations in the browser.
**JavaScript:** The programming language used to implement the simulation logic and data generation.**
HTML/CSS:** Basic web technologies used to structure and style the page.

### Project Structure:
#### Data Generation:
The dataGenerator function simulates the random movement, generating a series of steps (up, down, left, right) and tracking the corresponding coordinates.
#### Visualization:
The generated data is used to create an SVG-based scatter plot, where each data point is represented as a circle, and the path of the random walk is drawn using a line.
#### Axes and Scaling:
The x and y axes are dynamically calculated based on the generated data to fit the visualization, ensuring the entire path is clearly visible.
#### Objective:
This project aims to demonstrate how to visualize a random walk using D3.js while simulating a real-world scenario, such as a 4-sided die. It helps in understanding random processes and how random data can be visualized effectively.

### Potential Use Cases:
**Educational Tool:** Teaching the concept of random processes and random walks in mathematics or physics.
**Simulation Visualization:** Providing insights into the behavior of random systems and stochastic processes.
**Data Science & Probability:** Analyzing how random data behaves over time and visually representing uncertainty.

### How to Run:
Download or clone the repository.
Open the HTML file in a modern web browser.
The graph will automatically load and display the simulation of the random walk.
Future Improvements:
Add user interaction to control the number of steps in the random walk.
Customize the movement directions or add weights to different directions.
Allow the user to restart the random walk or change the visualization parameters dynamically.
