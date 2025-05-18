// api/server.js
//
// Monolithic Express function for Vercel.
//
// • All requests come in as /api/server/*  because of vercel.json.
// • Therefore each route here is written with that full prefix.
// • No app.listen(); we export the app for Vercel to invoke.

require('dotenv').config();            // Loads .env locally (ignored in prod)

const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json());

// ────────────────────────────────────────────────────────────
//  Initialize Supabase client (read-only for blogs)
// ────────────────────────────────────────────────────────────
const supabase = createClient(
  process.env.SUPABASE_URL,       
  process.env.SUPABASE_ANON_KEY
);

// ────────────────────────────────────────────────────────────
//  GET  /api/server/blogs          → all posts
//  GET  /api/server/blogs/:id      → single post
// ────────────────────────────────────────────────────────────
app.get('/api/server/blogs', async (_req, res) => {
  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('id', { ascending: true });

    if (error) throw error;
    res.status(200).json(data);
  } catch (err) {
    console.error('Fetch blogs error:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/server/blogs/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('id', id)
      .limit(1);

    if (error) throw error;
    if (!data || data.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json(data[0]);
  } catch (err) {
    console.error(`Fetch blog ${id} error:`, err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ────────────────────────────────────────────────────────────
//  Fallback 404 for anything else
// ────────────────────────────────────────────────────────────
app.use((_req, res) => res.status(404).json({ error: 'Not Found' }));

module.exports = app;                // important: no app.listen()
