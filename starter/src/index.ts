import app from "./server";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Process running on port ${PORT}`);
});
