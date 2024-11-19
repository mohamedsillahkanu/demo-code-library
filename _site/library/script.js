function toggleMenu(menuHeader) {
    const submenu = menuHeader.nextElementSibling;
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}

function loadContent(page) {
    const content = {
        overview: `
            <h2>Overview</h2>
            <p>This is an overview of the project. Here you can find links to different pages and functionalities.</p>
        `,
        page1: `
            <h2>Importing Shapefiles in R</h2>
            <pre id="codeBlock">
                <code>
# Load necessary library
library(sf) # Load the necessary library

# Read shapefile
shapefile <- st_read("path/to/your/shapefile.shp") # Read the shapefile

# Print the shapefile
print(shapefile) # Print the shapefile
                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>
            <p>This R code loads the 'sf' library, reads a shapefile, and prints its contents.</p>
            <h3>R Code Explanation</h3>
            <p>The 'sf' package is used to work with spatial data in R.</p>
        `,
        page2: `
            <h2>Page 2 Content</h2>
            <p>This is the content for Page 2.</p>
        `,
        quartoExample: `
            <h2>Quarto Example</h2>
            <p>This is an example of Quarto.</p>
        `,
    };

    document.getElementById('content').innerHTML = content[page];
}

// Load the overview content when the page opens
window.onload = function() {
    loadContent('overview');
};

function copyCode() {
    const codeBlock = document.getElementById("codeBlock").innerText;
    navigator.clipboard.writeText(codeBlock).then(() => {
        alert("Code copied to clipboard!");
    }).catch(err => {
        console.error('Error copying text: ', err);
    });
}
