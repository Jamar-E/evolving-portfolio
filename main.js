const contentData = {
    about: ` <div class=txtbox> I’m Jamar Edwards, a passionate Web Developer with a strong foundation in HTML, CSS, and WordPress development. 
                                <br>
                                With hands-on experience in building responsive websites, optimizing SEO, 
                                and collaborating with teams to deliver user-friendly, functional digital experiences, 
                                I thrive in environments where creativity meets technology. 
                                <br>
                                Whether it's designing custom WordPress themes or managing web projects from start to finish,
                                I’m always eager to take on new challenges and deliver high-quality results. 
                                <br><strong>Let's build something amazing together!</strong>
                                 </div>`,

    education: `<div class="txtbox">
                <h3>Castle High Secondary School</h3> 
                <strong>SEPTEMBER 2007 - SEPTEMBER 2012</strong> <br> 
                MATHS, ENGLISH, SCIENCE: C <br> 
                <br> 
                <h3>3aaa Academy Birmingham</h3> 
                <strong>JULY 2014 - SEPTEMBER 2015</strong> <br> 
                IT, WEB, SOFTWARE AND TELECOMS LEVEL 3
                </div>`,

    experience:  `                  <!-- XPERT Delivery -->

        <div class="experience-slider">
            <div class="experience-slide"> 
                <h3>Customer Service / Driver Support - XPERT Delivery (remote)</h3>
                <strong>August 2023 – November 2024</strong> 
                <ul>
                    <li> Responding to queries from new customers via email or phone.</li>              
                    <li> Proactively keeping existing customers updated on their deliveries and altering pre-existing orders.</li>
                    <li> Assisting drivers with locating addresses.</li> 
                    <li> Identifying and updating customers of any unforeseen setbacks in advance.</li>                
                </ul>

            </div>
                                            <!--StudioRavStudioRav -->

            <div class="experience-slide"> 
                <h3>Web Developer/Project Manager - StudioRav</h3>
                <strong>June 2023 - September 2023</strong> <br>
                <ul>
                    <li> Led and supervised developers to ensure products were completed on time and met expected standards. </li>
                    <li> Joined meetings with internal teams and potential clients, documenting specifications and project requirements. </li>
                    <li> Developed skills in HTML, CSS, JavaScript, and Liquid code while working on live client sites.</li>
                    <li> Simplified complex SEO concepts across the business.</li>
                </ul>
            </div>
                                        <!--Phoenix Reassure -->
            <div class="experience-slide">
                <h3>Pensions Professional - Phoenix Reassure</h3>
                <strong>January 2023 - June 2023</strong> 
                <ul>
                    <li> Updated and managed CRM records to enhance customer support and aftercare service.</li>
                    <li> Provided excellent customer service, answering inquiries, resolving complaints, and addressing product-related issues.</li>
                    <li> Managed multiple tasks efficiently, ensuring all inquiries were resolved within SLA timeframes.</li>
                    <li> Collaborated with internal teams to escalate and resolve complex customer issues effectively.</li>
                </ul>
            </div>



            
        </div>
        <div class="slider-controls">
            <button id="prev-btn">Previous</button>
            <button id="next-btn">Next</button>
        </div>
    `,
};

function updateContent(section) {
    const aboutContent = document.getElementById("aboutcontent");
    const aboutTitle = document.getElementById("abouttitle");

    // Apply fade-out effect
    aboutContent.style.opacity = 0;

    setTimeout(() => {
        aboutContent.innerHTML = contentData[section];
        aboutTitle.innerHTML = document.querySelector(`#${section}-btn`).innerHTML;
        
        // Apply fade-in effect
        aboutContent.style.opacity = 1;

        // Initialize the experience slider if the section is experience
        if (section === "experience") {
            initializeExperienceSlider();
        }
    }, 300);

    // Remove active class from all buttons
    document.querySelectorAll(".aboutlist a").forEach(btn => btn.classList.remove("active-btn"));
    
    // Add active class to clicked button
    document.querySelector(`#${section}-btn`).classList.add("active-btn");
}

function initializeExperienceSlider() {
    const slides = document.querySelectorAll(".experience-slide");
    let currentIndex = 0;
    
    // Show first slide
    slides[currentIndex].classList.add("active");

    document.getElementById("next-btn").addEventListener("click", () => {
        slides[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add("active");
    });

    document.getElementById("prev-btn").addEventListener("click", () => {
        slides[currentIndex].classList.remove("active");
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        slides[currentIndex].classList.add("active");
    });
}

// Add event listeners
document.getElementById("about-btn").addEventListener("click", () => updateContent('about'));
document.getElementById("education-btn").addEventListener("click", () => updateContent('education'));
document.getElementById("experience-btn").addEventListener("click", () => updateContent('experience'));


//contact popup

document.getElementById("contact").addEventListener("click", popup);
document.getElementById("contact-btn").addEventListener("click", popup);

function popup(){
    alert(`
        07554717046
        jamar.edw@gmail.com
        Dudley, West Midlands
        `)
};