const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Import the axios library

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "2b27f805-2cfc-4dc0-8557-16824fc024d5" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }

  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
