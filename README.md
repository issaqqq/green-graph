# 🌱 goGreen

**goGreen** is a Node.js script that allows you to make commits to the past (or the future) to "go green" on GitHub.

Whether you want to fill up your contribution graph to look like you've been hard at work, or create cool patterns and artwork, this tool helps you bring your profile to life.

## 🚀 About

**goGreen** helps you create commits on your GitHub profile for any date in the past. It utilizes a JSON data store to manage timestamps and Git automation to push contributions to your repository.

## 🛠️ Getting Started

Follow these steps to set up the project on your local machine.

### Prerequisites

* Node.js installed on your machine.
* Git installed and configured.

### Installation

1.  **Clone the repository**
    ```
    git clone [https://github.com/issaqqq/green_graph.git](https://github.com/issaqqq/green_graph.git)
    cd green_graph
    ```

2.  **Install Dependencies**  
    Install the required npm modules (`moment`, `simple-git`, `random`, `jsonfile`) to get everything running smoothly:
    ```
    npm init -y
    npm install moment simple-git random
    ```

2.  **Running**  
    ```
    node index.js
    ```

## 📦 Dependencies

This project relies on the following npm packages:

* [`moment`](https://www.npmjs.com/package/moment) - Handles date and time manipulation.
* [`simple-git`](https://www.npmjs.com/package/simple-git) - For executing Git commands easily.
* [`random`](https://www.npmjs.com/package/random) - To generate random numbers for commit frequency.
* [`jsonfile`](https://www.npmjs.com/package/jsonfile) - To read/write the timestamp data.

## ⚙️ Configuration

1.  **Commit Script:** Ensure you have your main JavaScript entry point (e.g., `index.js`) configured to manage your commits.
2.  **Data Store:** The script uses a JSON file (eg, `data.json`) to store commit timestamp data.
