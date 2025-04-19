// Original logic from Shuran Song's Lab website
let publications = [

    {
        "name": "Toward site-specific and self-sufficient robotic fabrication on architectural scales",
        "authors": "Steven Keating, Julian Leland, Levi Cai, Neri Oxman",
        "conference": "Science Robotics 2017 <span style='color: red'>(COVER ARTICLE)</span>",
        "paper": "https://www.science.org/doi/10.1126/scirobotics.aam8986",
        "thumbnail": "media/dcp_thumbnail.mp4",
        "webpage": "https://www.media.mit.edu/posts/dcp_scirobarticlerelease/",
    },
    {
        "name": "Design of a multi-agent, fiber composite digital fabrication system",
        "authors": "Markus Kayser*, Levi Cai*, Sara Falcone, Christoph Bader, Nassia Inglessis, Barrak Darweesh, Joao Costa, Neri Oxman",
        "conference": "Science Robotics (Focus) 2018",
        "paper": "https://www.science.org/doi/10.1126/scirobotics.aau5630",
        "thumbnail": "media/fiberbots_design_thumbnail.mp4",
    },
    {
        "name": "FIBERBOTS: Design and Digital Fabrication of Tubular Structures Using Robot Swarms.",
        "authors": "Markus Kayser, Levi Cai, Sara Falcone, Christoph Bader, Nassia Inglessis, Barrak Darweesh, Joao Costa, Neri Oxman",
        "conference": "RobArch, 2018 <span style='color: red'>(BEST PAPER AWARD)</span>",
        "paper": "https://link.springer.com/chapter/10.1007/978-3-319-92294-2_22",
        "thumbnail": "media/fiberbots_thumbnail.mp4",
    },
    {
        "name": "FIBERBOTS: An Autonomous Swarm-based Robotics System for Digital Fabrication of Fiber-based Composites",
        "authors": "Markus Kayser*, Levi Cai*, Sara Falcone, Christoph Bader, Nassia Inglessis, Barrak Darweesh, Joao Costa, Neri Oxman",
        "conference": "Springer Journal for Construction Robotics 2019 (Invited from RobArch)",
        "paper": "https://link.springer.com/article/10.1007/s41693-018-0013-y",
        "thumbnail": "media/fiberbots_thumbnail.mp4",
        "webpage":"https://www.media.mit.edu/projects/fiberbots/overview/"
    },
    {
        "name": "Streaming Scene Maps for Co-Robotic Exploration in Bandwidth Limited Environments",
        "authors": "Yogesh Girdhar, Levi Cai, Stewart Jamieson, Nathan McGuire, Genevieve Flaspohler, Stefano Suman, Brian Claus",
        "conference": "IEEE International Conference on Robotics and Automation (ICRA) 2019",
        "paper": "https://arxiv.org/abs/1903.03214",
        "thumbnail": "media/bluerov.png",
    },
    {
        "name": "Towards Auto-tuning of Kalman Filters for Underwater Gliders based on Consistency Metrics",
        "authors": "Levi Cai, Burak Boyacioglu, Sarah Webster, Lora van Uffelen, Kristi Morgansen",
        "conference": "IEEE OES OCEANS 2019",
        "paper": "https://ieeexplore.ieee.org/document/8962573",
        "thumbnail": "media/gliders.gif",
    },
    {
        "name": "Multi-Robot Visual Control of Autonomous Soft Robotic Fish",
        "authors": "Juan Salazar, Levi Cai, Braden Cook, Daniela Rus",
        "conference": "IEEE OES Autonomous Underwater Vehicles (AUV) 2022",
        "paper": "https://ieeexplore.ieee.org/document/9965882",
        "thumbnail": "media/sofi2.gif",
    },
    {
        "name": "CUREE: A Curious Underwater Robot for Ecosystem Exploration",
        "authors": "Yogesh Girdhar, Nathan McGuire, Levi Cai, Stewart Jamieson, Seth McCammon, Brian Claus, John San Soucie, Jessica Todd, T. Aran Mooney",
        "conference": "IEEE International Conference on Robotics and Automation (ICRA) 2023",
        "paper": "https://ieeexplore.ieee.org/document/10161282",
        "thumbnail": "media/curee_glamour.jpg",
    },
    {
        "name": "Semi-Supervised Visual Tracking of Marine Animals using Autonomous Underwater Vehicles",
        "authors": "Levi Cai, Nathan McGuire, Roger Hanlon, T.A. Mooney, Yogesh Girdhar",
        "conference": "International Journal of Computer Vision (IJCV) 2023",
        "paper": "https://link.springer.com/article/10.1007/s11263-023-01762-5",
        "thumbnail": "media/ijcv2023_thumbnail.mp4",
        "webpage": "https://warp.whoi.edu/vmat/"
    },
    {
        "name": "ReefGlider: A Highly Maneuverable Vectored Buoyancy Engine Based Underwater Robot",
        "authors": "Kevin Macauley, Levi Cai, Peter Adamczyk, Yogesh Girdhar",
        "conference": "IEEE International Conference on Robotics and Automation (ICRA) 2024",
        "paper": "https://ieeexplore.ieee.org/document/10610140",
        "thumbnail": "media/reefglider_thumbnail.mp4",
    },
    {
        "name": "Learning to Swim: Reinforcement Learning for 6-DOF Control of Thruster-driven Autonomous Underwater Vehicles",
        "authors": "Levi Cai*, Kevin Chang*, Yogesh Girdhar",
        "conference": "IEEE International Conference on Robotics and Automation (ICRA) 2025",
        "paper": "https://arxiv.org/abs/2410.00120",
        "thumbnail": "media/warpauv_rl_thumbnail.mp4",
        "code": "https://github.com/warplab/isaac-auv-env"
    },


]
console.log("Loading publications...");
let section = document.getElementById("publications");
publications.forEach(publication => {
    let name = publication["name"];
    let authors = publication["authors"];
    let conference = publication["conference"];
    let webpage = publication["webpage"];
    let code = publication["code"];
    console.log("code", code);
    let paper = publication["paper"];
    let thumbnail = publication["thumbnail"];
    let note = publication["note"] ? publication["note"] : "";
    let thumbnail_node;
    if (thumbnail.includes("mp4") || thumbnail.includes("webm")) {
        thumbnail_node = `
            <video style="margin-right: 15px; border-radius: 5px;" width="180px" height="auto" autoplay loop muted>
                <source src="${thumbnail}" type="video/${thumbnail.includes("mp4") ? "mp4" : "webm"}">
            </video>`;
    } else {
        thumbnail_node = `<img src="${thumbnail}" style="width:180px; max-width: max-content; margin-right: 15px; border-radius: 5px;" width="180" height="auto"/>`;
    }
    if (webpage || paper || code) {
        section.insertAdjacentHTML('afterbegin',
            `
            <div style="display:flex;height:auto;margin-bottom: 25px;">
                <a href="${webpage}"> 
                    ${thumbnail_node}
                </a>
                <div>
                    <a href="${webpage}"> <b> ${name}</b> </a><br/>
                    ${authors}<br/>
                    <i>${conference}</i><br/>
                    ${webpage ? `<a href="${webpage}"> Webpage </a>` : ""}
                    ${paper ? `<a href="${paper}"> Paper </a>` : ""}
                    ${code ? `<a href="${code}"> Code </a>` : ""}
                    ${note}<br/>
                </div>
            </div>
            `);
    }
});
section.insertAdjacentHTML('afterbegin', `<h1>Selected Publications</h1>Full publication list at <a href="https://scholar.google.com/citations?user=10VXZoQAAAAJ&hl=en">Google Scholar</a><hr>* Indicates equal contribution<br>`);