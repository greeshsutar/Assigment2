const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const allroutes = require("./routes/User.route");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

allroutes(app);

const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
    console.log(`Server Connected on port ${PORT}`);
});