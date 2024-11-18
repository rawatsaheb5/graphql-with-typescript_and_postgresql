import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 8000;
app.use('/', (req, res) => {
    return res.json({ status: 200, message: "everything is ok" });
});
app.listen(PORT, () => {
    console.log(`server is listening at port ${PORT}`);
});
