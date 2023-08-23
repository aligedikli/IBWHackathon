# NFT-Based Education Platform Backed by Philanthropy

## Education today faces challenges such as inequality of opportunity and access difficulties. However, thanks to the possibilities offered by technology, innovative projects can take important steps to solve these problems. Here, the NFT-based education platform project, supported by philanthropic investors, represents a radical change in the field of education.

Accessible and Motivating Education

The primary purpose of this project is to support poor students and bring them together with education. By registering on the training platform, students have the opportunity to choose from training courses that suit their interests and needs. Upon completion of each training course, students stake NFTs and earn rewards based on their achievements. This mechanism allows students to be motivated and complete their education more efficiently.

Education Support and Value Increase

For philanthropic investors who want to support the project, the platform offers a variety of options. Investors can support the project in ways such as backing it with tokens, providing training through NFTs, or directly contributing to training materials. The value of these investments can increase with student success and the growth of the platform. Investors can reinvest their earnings or channel them for purposes such as educational scholarships.

Teaching and Creating Content

Instructors can create training courses based on their area of expertise on the platform. By making these courses NFT-based, they can provide rewards to students. Instructors can monitor student progress and engagement while presenting educational materials, and interact with other instructors and students in the community section of the platform.

Community and Collaboration

The general use case included in the project highlights how the platform enables community interaction and collaboration. Users can participate in community events, share their experiences, seek collaboration opportunities, and contribute to the project's development.

This project brings together an innovative approach and social impact in the field of education, providing students with an accessible education opportunity and enabling philanthropic investors to create value for this purpose. Educators can both benefit students and increase their value by providing training on the platform. The community, on the other hand, contributes to the transformative power of education by collaborating through the platform.

## Running the project

### Contract

Note: You should create `blockchain/.env` file with the following content:

(substitute `<...>` with the deployer wallet's private key obtained from Metamask)

```sh
PRIVATE_KEY=<...>
```

After that:

```sh
cd blockchain
npm i
npx hardhat run --network testedge scripts/deploy.js
```

Take note of the contract address printed after this command.

### Backend

In another terminal:

```sh
cd backend
npm i
npm start
```

### Frontend

In another terminal:

```sh
cd frontend
npm i
npm run dev
```
