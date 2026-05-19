const app = require("./app");

const PORT = 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
app.listen(process.env.PORT || 3000);