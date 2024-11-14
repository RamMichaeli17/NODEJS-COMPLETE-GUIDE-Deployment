<div id="top"></div>

<!-- PROJECT SHIELDS -->
[![GitHub repo size][reposize-shield]](#)
[![GitHub language count][languagescount-shield]](#)
[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Gmail][gmail-shield]][gmail-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/RamMichaeli17/NODEJS-COMPLETE-GUIDE-DEPLOYMENT">
    <img src="https://github.com/user-attachments/assets/e3c955c7-fac4-4a35-aedb-862159131003" alt="Logo" width="240" height="240">
  </a>

<h3 align="center">Node.js Online Shop Project</h3>

  <p align="center">
    This project is a full-featured online shop application built with <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>. It includes core features like user authentication, product management, shopping cart functionality, and order processing, providing a practical, real-world example of a Node.js application.
    <br />
    <br />
    Visit the deployed application: <a href="https://nodejs-complete-guide-deployment.onrender.com">Node.js Complete Guide Deployment</a>
    <br />
    <strong>Note:</strong> Due to free tier limitations, expect delays on first load due to app sleep mode.
    <br /><br />
    <strong>Note:</strong> This project is derived from the Udemy course <a href="https://www.udemy.com/course/nodejs-the-complete-guide/">NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)</a> by Maximilian Schwarzmüller.
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#key-components-and-features">Key Components and Features</a></li>
    <li><a href="#additional-concepts-covered">Additional Concepts Covered</a></li>
    <li><a href="#learning-objectives">Learning Objectives</a></li>
    <li><a href="#build-requirements">Build Requirements</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#deployment">Deployment</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contributors">Contributors</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

![image](https://github.com/user-attachments/assets/6047fd5b-a087-46b1-8152-0bd82527e3c6)

This Node.js online shop project simulates a functional e-commerce application where users can browse products, add items to a cart, and complete a checkout process. It covers the essential features of web development, including:

- **Product Management**: Admins can add, edit, and delete products.
- **User Authentication**: Users can sign up, log in, and manage their accounts.
- **Shopping Cart**: Users can add products to the cart, update quantities, and proceed to checkout.
- **Order Management**: Includes checkout process, order history, and payment processing.
- **Responsive Design**: Ensures compatibility across devices.

### Technologies Used
- **Node.js**: Backend server to handle requests and data processing.
- **Express.js**: Framework for creating server routes and API endpoints.
- **MongoDB**: Database for storing user, product, and order information.
- **EJS**: For rendering dynamic web pages.
- **Stripe**: For payment processing.
- **SendGrid**: For sending emails, including registration confirmations and password resets.
- **Render**: For deploying the application, providing a seamless deployment process.

<p align="right">(<a href="#top">back to top</a>)</p>

## Key Components and Features

### Product Management
- **View Products**: Users can view a list of products with descriptions, prices, and images.
- **Admin Access**: Admins can add, edit, and delete products, demonstrating CRUD operations.

### User Authentication
- **Sign Up and Login**: Users can create accounts and log in securely.
- **Access Control**: Restricts certain actions to authenticated users only.
- **Email Confirmation**: Sends confirmation emails upon registration using SendGrid.
- **Password Reset**: Sends password reset links for account recovery.

### Shopping Cart
- **Add to Cart**: Users can add products, adjust quantities, and remove items from their cart.
- **Persisted Data**: Cart data is stored in sessions or associated with user accounts.

### Order Management
- **Checkout and Orders**: Users can place orders and receive a summary; admins can view all orders.
- **PDF Invoices**: Generates PDF invoices, demonstrating file generation and handling.

### Database Integration
- **MongoDB & Mongoose**: Stores data for products, users, carts, and orders, managed with Mongoose.
- **Data Modeling**: Uses schema validation to structure data and ensure consistency.

### Server-Side Rendering with EJS
- **Dynamic HTML Views**: Renders dynamic HTML views with real-time data from the database.

### SendGrid Integration
- **Email Confirmation**: Sends a confirmation email upon user registration.
- **Password Reset**: Sends password reset links, enhancing account security.

### Additional Concepts Covered
- **Form Validation**: Ensures proper validation of user inputs in registration and checkout forms.
- **Error Handling**: Implements user-friendly error messages and error-handling best practices.
- **Responsive Design**: Ensures compatibility with a range of devices.

<p align="right">(<a href="#top">back to top</a>)</p>

## Learning Objectives
By completing this project, you will:
- Build a CRUD application with secure user authentication.
- Implement the MVC pattern for organized code.
- Integrate with a NoSQL database using Mongoose.
- Generate files (PDF invoices) and handle file downloads in Express.
- Manage user sessions and apply security practices with authentication.

<p align="right">(<a href="#top">back to top</a>)</p>

## Build Requirements

- **Node.js** (v14.x or later)
- **MongoDB**: Local or Atlas instance.
- **Stripe Account**: For payment processing.

<p align="right">(<a href="#top">back to top</a>)</p>

## Deployment

This project is deployed using **[Render](https://render.com/)**. Please note the following regarding the deployment:

- **Free Tier Limitations**: Due to the limitations of the free tier on Render, the instance will spin down with inactivity, which can delay requests by 50 seconds or more.

Visit the deployed application: [Node.js Complete Guide Deployment](https://nodejs-complete-guide-deployment.onrender.com)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/RamMichaeli17/NODEJS-COMPLETE-GUIDE-DEPLOYMENT.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Set up environment variables
   - Create a `.env` file and add your credentials:
     ```env
     MONGO_DEFAULT_DATABASE=your_mongo_default_database
     MONGO_PASSWORD=your_mongo_password
     MONGO_USER=your_mongo_user
     NODE_ENV=your_node_env
     PORT=your_port
     SENDGRID_KEY=your_sendgrid_key
     STRIPE_KEY=your_stripe_key
     ```
4. Start the server
   ```sh
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

- **Admin Panel**: Manage products (add, edit, delete).
- **User Registration and Login**: Create an account and log in.
- **Shopping Cart**: Add products to the cart and manage them.
- **Checkout Process**: Complete the purchase with payment and view order history.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See [`LICENSE.txt`](https://github.com/RamMichaeli17/NODEJS-COMPLETE-GUIDE-DEPLOYMENT/blob/main/LICENSE.txt) for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

## Contributors

Thanks to the following people who have contributed to this project:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/RamMichaeli17">
        <img src="https://avatars.githubusercontent.com/u/62435713?v=4" width="100px;" /><br>
        <sub>
          <b>Ram Michaeli</b>
        </sub>
      </a>
    </td>
    <!-- Add more contributors here -->
  </tr>
</table>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Ram Michaeli - [ram153486@gmail.com](mailto:ram153486@gmail.com)

Project Link: [https://github.com/RamMichaeli17/NODEJS-COMPLETE-GUIDE-DEPLOYMENT](https://github.com/RamMichaeli17/NODEJS-COMPLETE-GUIDE-DEPLOYMENT)

<a href="mailto:ram153486@gmail.com"><img src="https://img.shields.io/twitter/url?label=Gmail%3A%20ram153486%40gmail.com&logo=gmail&style=social&url=https%3A%2F%2Fmailto%3Aram153486%40gmail.com"/></a>
<a href="https://linkedin.com/in/ram-michaeli"><img src="https://img.shields.io/twitter/url?label=ram%20Michaeli&logo=linkedin&style=social&url=https%3A%2F%2Fmailto%3Aram153486%40gmail.com"/></a>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[reposize-shield]: https://img.shields.io/github/repo-size/RamMichaeli17/NODEJS-COMPLETE-GUIDE-DEPLOYMENT?style=for-the-badge
[languagescount-shield]: https://img.shields.io/github/languages/count/RamMichaeli17/NODEJS-COMPLETE-GUIDE-DEPLOYMENT?style=for-the-badge
[contributors-shield]: https://img.shields.io/github/contributors/RamMichaeli17/NODEJS-COMPLETE-GUIDE-DEPLOYMENT.svg?style=for-the-badge
[contributors-url]: https://github.com/RamMichaeli17/NODEJS-COMPLETE-GUIDE-DEPLOYMENT/graphs/contributors
[stars-shield]: https://img.shields.io/github/stars/RamMichaeli17/NODEJS-COMPLETE-GUIDE-DEPLOYMENT.svg?style=for-the-badge
[stars-url]: https://github.com/RamMichaeli17/NODEJS-COMPLETE-GUIDE-DEPLOYMENT/stargazers
[license-shield]: https://img.shields.io/github/license/RamMichaeli17/NODEJS-COMPLETE-GUIDE-DEPLOYMENT.svg?style=for-the-badge
[license-url]: https://github.com/RamMichaeli17/NODEJS-COMPLETE-GUIDE-DEPLOYMENT/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://linkedin.com/in/ram-michaeli
[gmail-shield]: https://img.shields.io/badge/ram153486@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white
[gmail-url]: mailto:ram153486@gmail.com
