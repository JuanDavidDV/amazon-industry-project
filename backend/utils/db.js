import fs from 'fs/promises';
import path from 'path';

// Define DB_PATH with appropriate file paths
const DB_PATH = {
  users: path.join(new URL('.', import.meta.url).pathname, '../data/users.json'),
  reviews: path.join(new URL('.', import.meta.url).pathname, '../data/reviews.json'),
  badges: path.join(new URL('.', import.meta.url).pathname, '../data/badges.json')
};

// Initialize empty JSON files if they don't exist
export const initializeDB = async () => {
  for (const [key, filePath] of Object.entries(DB_PATH)) {
    try {
      await fs.access(filePath);
    } catch {
      await fs.writeFile(filePath, JSON.stringify([]));
    }
  }
};

export const readData = async (type) => {
  const data = await fs.readFile(DB_PATH[type], 'utf8');
  return JSON.parse(data);
};

export const writeData = async (type, data) => {
  await fs.writeFile(DB_PATH[type], JSON.stringify(data, null, 2));
};

// Helper functions for CRUD operations
export const create = async (type, item) => {
  const data = await readData(type);
  const newItem = { id: Date.now().toString(), ...item };
  data.push(newItem);
  await writeData(type, data);
  return newItem;
};

export const findOne = async (type, query) => {
  const data = await readData(type);
  return data.find(item => 
    Object.entries(query).every(([key, value]) => item[key] === value)
  );
};

export const findById = async (type, id) => {
  const data = await readData(type);
  return data.find(item => item.id === id);
};

export const update = async (type, id, updates) => {
  const data = await readData(type);
  const index = data.findIndex(item => item.id === id);
  if (index === -1) return null;
  
  data[index] = { ...data[index], ...updates };
  await writeData(type, data);
  return data[index];
};