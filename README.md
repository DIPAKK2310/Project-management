<h1>Backend with Js</h1>

<h3>Description:</h3>
<p>This is a backend developed with Node using javascript with best practices</p>

<h3>Folder Structure:</h3>
ProjectManagement /

    |--public /
    |--src /
    |--|--📂controllers
    |  |--📂db
    |  |--📂middlewares
    |  |--📂models
    |  |--📂routes
    |  |--📂utils
    |  |--📂validators
    |
    |--🛜server.js
    |--⚙️.env


<h3>Installation :</h3>
<h4>1. Clone the repository</h4>

  ```bash
    git clone https://github.com/DIPAKK2310/Project-management.git
    cd Project-management
```

<h3>2. Install dependencies :</h3>

```bash
cd backend
npm install
# or
yarn install
```
<h3>3. Environment Variables</h3>

Create a `.env` file in the `server/` directory:

```env
PORT=7000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
# Add any other secrets or configs
```
