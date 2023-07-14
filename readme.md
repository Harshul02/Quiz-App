# Quiz Application
## About
Welcome to the Quiz Application! Our platform is designed to provide an interactive and engaging experience for both administrators and students. Built on the MERN (MongoDB, Express.js, React.js, Node.js) stack, our application offers a comprehensive set of features to create, manage, and take quizzes.

Administrators have the power to create quizzes, add questions, and define multiple-choice answers. They can easily log in to the system using their unique credentials and access the admin dashboard. From there, they can create new quizzes by specifying the quiz title, duration, and other relevant details. Additionally, administrators can add questions to each quiz, along with multiple-choice answers, and designate the correct option(s).

On the other hand, students can browse through the available quizzes and select the ones they wish to attempt. The user-friendly interface allows students to choose from multiple options for each question and submit their responses. The system automatically calculates and displays the final result upon submission, giving students immediate feedback on their performance.

With this Quiz Application, I aim to provide an intuitive and efficient platform for both administrators and students. Whether you're an instructor looking to create quizzes or a student eager to test your knowledge, our MERN-based application ensures a seamless experience. Get ready to embark on a journey of learning and evaluation!

### Built With

Following technologies and libraries are used for the development of this project.

- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/en)
- [Bootstrap](https://getbootstrap.com/)


### Running the project


1. **Fork** and **clone** the project to your local system
2.  `cd` into `client` and `server` directory and run:

```
npm i
```

3. Now get the private key of you Mumbai testnet account from Metamask and set it in `web3/.env` file:
```
PRIVATE_KEY = your key
```
4. To deploy the smart contract, in `web3` directory run the command:
```
npm run deploy
```
Follow the link, deploy the contract and copy the deployed address

5. In `client/src/context/index.jsx` paste the address here:

```
  const { contract } = useContract('your address');
```
6. Finally in `client` use command:
```
npm run dev
```
