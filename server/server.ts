import app from "./src/app";

const port = process.env.PORT || 4003;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
