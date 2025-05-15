// api/server.js
require('dotenv').config();                // Load .env locally
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

// Initialize Express
const app = express();
app.use(cors());                           // Allow same‑origin requests
app.use(express.json());                   // Parse JSON bodies

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// ===== Routes ===== //

// GET /api/server/blogs
// └─ Returns array of all blog posts
app.get('/api/server/blogs', async (req, res) => {
  try {
    const { data: posts, error } = await supabase
      .from('blogs')
      .select('*')
      .order('id', { ascending: true });

    if (error) throw error;
    return res.status(200).json(posts);
  } catch (err) {
    console.error('Error fetching blogs:', err);
    return res.status(500).json({ error: err.message });
  }
});

// GET /api/server/blogs/:id
// └─ Returns a single blog post by ID
app.get('/api/server/blogs/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { data: posts, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('id', id)
      .limit(1);

    if (error) throw error;
    if (!posts || posts.length === 0) {
      return res.status(404).json({ error: 'Not found' });
    }
    return res.status(200).json(posts[0]);
  } catch (err) {
    console.error(`Error fetching blog ${id}:`, err);
    return res.status(500).json({ error: err.message });
  }
});

// (Optional) POST /api/server/blogs — for future create
// app.post('/api/server/blogs', async (req, res) => { … });

// Export the app for Vercel
module.exports = app;
