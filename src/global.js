function homepageDisplayCard() {

    fetch('/json/data.json')
        .then(res => res.text())
        .then(data => {

            const projectsCardData = JSON.parse(data);

            const filteredCard = projectsCardData.projects.filter(card => card.view_on_homepage === true);

            let html = '';

            filteredCard.map(val => {
                html += `
                    <div class="project_card" onclick="openProject('${val.behanceLink}')">
                        <div class="img_container">
                            <div class="project_cover_img" style="background-image: url('${val.coverImg}');">
                                <div class="overlay"></div>
                            </div>
                        </div>
                        <div class="card_infos">
                            <h1 class="title">${val.title}</h1>
                            <p class="subtitle">${val.subtitle}</p>
                        </div>
                    </div>
                
                `
            });

            document.querySelector('#for_homepage').innerHTML = html;
        })
        .catch(err => console.log(err))  
}


function projectsPageDisplayCard() {

    fetch('/json/data.json')
    .then(res => res.text())
    .then(data => {

        const projectsCardData = JSON.parse(data);

        let html = '';
        
        projectsCardData.projects.map(val => {
            html += `
                <div class="project_card" onclick="openProject('${val.behanceLink}')">
                    <div class="img_container">
                        <div class="project_cover_img" style="background-image: url('${val.coverImg}');">
                        <div class="overlay"></div>
                        </div>
                    </div>
                    <div class="card_infos">
                        <h1 class="title">${val.title}</h1>
                        <p class="subtitle">${val.subtitle}</p>
                    </div>
                </div>`
        });
        
        document.querySelector('#for_projects_page').innerHTML = html;
    })
    .catch(err => console.log(err)) 
}


function downloadCV() {

    let link = document.createElement('a');

    link.setAttribute('download', 'CV - Joshua Zaspa');
    link.href = '/assets/CV.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


function openProject(URL) {

    let link = document.createElement('a');

    link.href = URL;
    link.setAttribute('target', '_blank');

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    document.getElementById('sd')

}

function sendingEmail() {
    // Replace the placeholders with actual email, subject, and body
    const toEmail = 'joshuazaspa01@gmail.com';
    const subject = 'CLIENT FROM THE WEBSITE';
    
    // Construct the mailto URL
    const mailtoUrl = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}`;

    // Open the default email client
    window.location.href = mailtoUrl;
}


// For Sidebar
function show() {
    document.querySelector('.hamburger_menu').classList.toggle('open');
    document.querySelector('.sidebar').classList.toggle('active');
    document.querySelector('.sidebar_backdrop').classList.toggle('show_backdrop');
}

homepageDisplayCard();
projectsPageDisplayCard();

