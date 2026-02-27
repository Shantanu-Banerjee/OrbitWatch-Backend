const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/debris", async (req, res) => {
  try {
    const response = await fetch(
      "https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=json"
    );

    const data = await response.json();
    res.json(data);

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});