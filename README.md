<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/Antonomy/Custom-Reddit">
    <img src="https://avatars.githubusercontent.com/u/24372514?v=4" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Custom Reddit</h3>

  <p align="center">
    An application to create an open and transparent way to solicit and give feedback.
    <br />
    <a href="https://github.com/Antonomy/Custom-Reddit"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/Antonomy/Custom-Reddit">View Demo</a>
    ·
    <a href="https://github.com/Antonomy/Custom-Reddit/issues">Report Bug</a>
    ·
    <a href="https://github.com/Antonomy/Custom-Reddit/issues">Request Feature</a>
  </p>
</div>
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>
<br />

## About The Project
This app was inspired by Reddit. The goal is to create an open and transparent way to solicit and give feedback. It can be used to pick a name for the school mascot, propose solutions for sensitive issues at work, or even to choose the destination for a vacation with friends.

![Custom Reddit Screen Shot](./public/images/app_image.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* Express.js
* Node.js
* JavaScript
* HTML
* Mongoose


<p align="right">(<a href="#readme-top">back to top</a>)</p>


# Getting Started

## How to set this up locally
To get a local copy up and running follow these simple example steps.

### Prerequisites


* npm
  ```sh
  npm install npm@latest -g
  ```
* node.js
    Download & install [node.js](https://nodejs.org/en/)

### Installation

1. Get Excited! - Good or bad, you're embarking on a new adventure!
2. Clone the repo
   ```sh
   git clone https://github.com/Antonomy/Custom-Reddit.git
   ```
3. Install NPM packages
   ```sh
   npm i
   ```
4. Duplicate the `.env-example` file and rename it to `.env`. 
5. Update `MONGO_URI` to yours
    ```
    MONGO_URI=mongodb+srv://xxx
    ```
6. Start Back-End
   ```
   npm run dev
   ```
7. Go to `http://localhost:3000/prompts`


<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Roadmap

- [x] Ability to Post
- [x] Ability to Upvote and Downvote
- [x] Post Deletion Capability

Next Steps:
- [ ] Ability to add images
- [ ] Add authentication and authorization
- [ ] Ability to post prompts as well as comments and the ability to follow topics
- [ ] Nesting comments within prompts

See the [open issues](https://github.com/Antonomy/Custom-Reddit/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


# Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star ⭐! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


# Contact

Antony Yu

Email: antonyyu@gmail.com

[Connect on LinkedIn](https://www.linkedin.com/in/antonyyu/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


# Acknowledgments

* First, I thank myself because I worked hard on this and I'm proud of myself.
* Friends and Family - Life wouldn't be as fun without you in it. Thank you for putting up with me.
* Third Degree Burns Family - We made it through and you were all a part of making me the engineer I am.

# Miscellaneous
![ERD](/public/images/ERD.png)
![Kanban Board](/public/images/KanbanBoard.png)
![Wireframe](/public/images/Wireframe.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
