

// Check if the current page is projects.html
if (window.location.pathname.includes("projects.html")) {
    // Array of projects
    const projects = [
        { name: "Project 1", description: "This is the first project." },
        { name: "Project 2", description: "This is the second project." }
        // Add more projects as needed
    ];

    // Get the projects container
    const projectsContainer = document.getElementById("projects-container");

    // Loop through the projects array and create HTML elements
    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.className = "project";
        projectElement.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        `;
        projectsContainer.appendChild(projectElement);
    });
}
