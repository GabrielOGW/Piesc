const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 3001;

const dbConfig = {//TODO: Configurar banco de dados
  host: 'seu-host-do-mysql',
  user: 'seu-usuario-do-mysql',
  password: 'sua-senha-do-mysql',
  database: 'seu-banco-de-dados',
};

let pool;

async function initializeDatabase() {
  try {
    pool = await mysql.createPool(dbConfig);
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    process.exit(1);
  }
}

app.use(express.json());

app.post('/products', createProduct);
app.put('/products/:id', updateProduct);
app.get('/products', getProducts);
app.get('/products/:id', getProduct);

app.listen(port, async () => {
  try {
    await initializeDatabase();
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.error('Error starting server:', error.message);
    process.exit(1);
  }
});

async function executeQuery(sql, params = []) {
  try {
    const [result] = await pool.query(sql, params);
    return result;
  } catch (error) {
    console.error('Database query error:', error.message);
    throw error;
  }
}

async function createProduct(req, res) {
  const product = req.body;

  try {
    const result = await executeQuery(
      'INSERT INTO products (name, description, quantity, category, batch) VALUES (?, ?, ?, ?, ?)',
      [product.name, product.description, product.quantity, product.category, product.batch]
    );

    const productId = result.insertId;
    res.status(201).json({ message: 'Product created successfully!', productId });
  } catch (error) {
    res.status(500).json({ error: 'Error creating product' });
  }
}

async function updateProduct(req, res) {
  const id = req.params.id;
  const product = req.body;

  try {
    await executeQuery(
      'UPDATE products SET name=?, description=?, quantity=?, category=?, batch=? WHERE id=?',
      [product.name, product.description, product.quantity, product.category, product.batch, id]
    );

    res.status(200).json({ message: 'Product updated successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error updating product' });
  }
}

async function getProducts(req, res) {
  try {
    const rows = await executeQuery('SELECT * FROM products');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
}

async function getProduct(req, res) {
  const id = req.params.id;

  try {
    const rows = await executeQuery('SELECT * FROM products WHERE id=?', [id]);

    if (rows.length === 0) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.status(200).json(rows[0]);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching product' });
  }
}