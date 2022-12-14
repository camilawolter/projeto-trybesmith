import express from 'express';
import products from './routes/products';
import users from './routes/users';

const app = express();

app.use(express.json());
app.use('/products', products);
app.use('/users', users);

export default app;
