Create a modern Node.js Express application that can be deployed to AWS App Runner.

Requirements:

* Use Express.js.
* Listen on process.env.PORT with 8080 as a fallback.
* Serve a professional single-page portfolio website.
* Use HTML, CSS, and JavaScript only (no React or frontend frameworks).
* Make the design modern, responsive, and professional with a blue cloud-engineering theme.
* Add subtle animations and hover effects.
* Include a navigation bar and footer.

Portfolio Content:

Name:
Folarin Favour Olaoluwapo

Professional Title:
Cloud Engineer | DevOps Engineer | Full Stack Developer

Hero Section:

* Display my name prominently.
* Add a professional headline:
  "Building scalable cloud infrastructure, automation solutions, and modern web applications."
* Add a short introduction about my passion for cloud computing, DevOps, and software engineering.

About Me Section:
Include a professional summary explaining that I am:

* A Cloud Engineer
* A DevOps enthusiast
* A Full Stack Developer
* Interested in AWS, Linux, Infrastructure as Code, CI/CD, Containers, Cloud Security, and scalable systems.
* Passionate about solving business problems through technology.

Skills Section:
Create cards for:

* AWS
* Linux
* Docker
* Kubernetes
* Git & GitHub
* CI/CD
* Node.js
* JavaScript
* MongoDB
* Terraform
* Cloud Security
* Monitoring & Logging

Projects Section:
Display project cards for:

1. Multi-Region AWS Application Deployment
   Description:
   Built a highly available application deployed across multiple AWS regions using AWS App Runner and automated GitHub deployments.

2. Alumni Networking Platform
   Description:
   Developed a platform that helps students reconnect, network, share opportunities, and build professional relationships after graduation.

3. eFarming Platform
   Description:
   Building technology solutions that support farmers, improve agricultural productivity, and connect stakeholders across the agricultural ecosystem.

Experience Highlights Section:
Show achievements such as:

* Cloud Engineering projects
* Full Stack Web Development
* Startup Building
* Infrastructure Automation
* CI/CD Implementation

Contact Section:
Include:

* LinkedIn
* GitHub
* Medium
* Email

Add placeholder links that can easily be replaced later.

Technical Requirements:

* Create package.json.
* Create index.js.
* Use Express static file serving.
* Separate HTML, CSS, and JavaScript into different files.
* Organize files using:

/public
/css
/js
index.html

* Add comments throughout the code.
* Ensure the site is mobile responsive.
* Ensure the application is production-ready for deployment on AWS App Runner.

At the top of the page display:
"Hosted on AWS App Runner"

Also display the current AWS region using:
process.env.AWS_REGION

If AWS_REGION is unavailable, display:
"Local Development Environment"

Generate all files with complete code.
