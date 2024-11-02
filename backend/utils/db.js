const fs = require('fs').promises;
const path = require('path');

const DB_PATH = {
  users: path.join(__dirname, '../data/users.json'),
  purchases: path.join(__dirname, '../data/purchases.json'),
  reviews: path.join(__dirname, '../data/reviews.json'),
  badges: path.join(__dirname, '../data/badges.json')
};

// Initialize empty JSON files if they don't exist
async function initializeDB() {
  for (const [key, filePath] of Object.entries(DB_PATH)) {
    try {
      await fs.access(filePath);
    } catch {
      await fs.writeFile(filePath, JSON.stringify([]));
    }
  }
}

async function readData(type) {
  const data = await fs.readFile(DB_PATH[type], 'utf8');
  return JSON.parse(data);
}

async function writeData(type, data) {
  await fs.writeFile(DB_PATH[type], JSON.stringify(data, null, 2));
}

// Helper functions for CRUD operations
async function create(type, item) {
  const data = await readData(type);
  const newItem = { id: Date.now().toString(), ...item };
  data.push(newItem);
  await writeData(type, data);
  return newItem;
}

async function findOne(type, query) {
  const data = await readData(type);
  return data.find(item => 
    Object.entries(query).every(([key, value]) => item[key] === value)
  );
}

async function findById(type, id) {
  const data = await readData(type);
  return data.find(item => item.id === id);
}

async function update(type, id, updates) {
  const data = await readData(type);
  const index = data.findIndex(item => item.id === id);
  if (index === -1) return null;
  
  data[index] = { ...data[index], ...updates };
  await writeData(type, data);
  return data[index];
}

module.exports = {
  initializeDB,
  create,
  findOne,
  findById,
  update,
  readData,
  writeData
};