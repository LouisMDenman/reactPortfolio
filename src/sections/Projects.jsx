

export function Projects() {
    return (
        <div id="projects">
            <h2 id="projectsHeader">Main Projects</h2>
            <br></br>
            <div class="projectDiv">
                <div class="projectContent">
                    <h3>Bookhaven</h3>
                    <p>Bookhaven is a full-stack web application that is designed for anyone interested in books to record what they have read, plan what they would like to read and more. It was built with the MERN stack, and completed in collaboration with two of my Coder Academy peers as our final project for the bootcamp.</p>
                    <a class="link" href="https://github.com/orgs/Bookhaven-WSL/repositories"><i>See the repository here.</i></a>
                </div>
                <img src="/assets/Bookhaven.png" class="projectImg"/>
            </div>
            <br></br>
            <br></br>
            <div class="projectDiv">
                <div class="projectContent">
                    <h3>Doldrum Disruptor</h3>
                    <p>Doldrum Disruptor is a website that is built with React, and makes use of the Bored API to generate activity suggestions based on a number of participants and categories. It was created within a week for the Coder Academy Hackathon 2024.
                    </p>
                    <a class="link" href="https://github.com/LouisMDenman/doldrumDisruptor"><i>See the repository here.</i></a>
                </div>
                <img src="/assets/dd.png" class="projectImg"/>
            </div>
            <br></br>
            <br></br>
            <div class="projectDiv">
                <div class="projectContent">
                    <h3>Spotify Dashboard</h3>
                    <p>This spotify dashboard is another website that is built with React, and makes use of the spotify API to display the top 20 tracks from my personal account. The project involved learning more about account verification and validation, as well as the use of APIs.</p>
                    <a class="link" href="https://github.com/LouisMDenman/spotifyDashboard"><i>See the repository here.</i></a>
                </div>
                <img src="/assets/sd.png" class="projectImg"/>
            </div>
            <br></br>
            <br></br>
            <div class="projectDiv">
                <div class="projectContent">
                    <h3>Previous Portfolio</h3>
                    <p>This personal portfolio is made purely with HTML and CSS, and whilst slightly outdated was a foundational learning block for front-end development concepts. It has since been replaced, obviously, by this current portfolio which was built with React in Ubuntu OS.</p>
                    <a class="link" href="https://github.com/LouisMDenman/portfolio"><i>See the repository here.</i></a>
                </div>
                <img src="/assets/pp.png" class="projectImg"/>
            </div>
        </div>
    )
}