// api/server.js
//
// Monolithic Vercel Serverless Function
// -------------------------------------
// • Handles all blog-related endpoints
// • Connects to Supabase using env vars
// • Exports an Express app (NO app.listen)
//
// Required env vars (set in Vercel & .env):
//   SUPABASE_URL        = https://<project-ref>.supabase.co
//   SUPABASE_ANON_KEY   = <anon-public-key>

require('dotenv').config();                  // Safe: ignored in production if no .env

const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());                             // Allow same-origin & localhost during dev
app.use(express.json());                     // Parse JSON request bodies

// Initialise Supabase client (re-used across invocations)
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

/* ------------------------------------------------------------------ */
/*  GET  /blogs  – return all posts                                    */
/* ------------------------------------------------------------------ */
app.get('/blogs', async (req, res) => {
  try {
    const { data: posts, error } = await supabase
      .from('blogs')
      .select('*')
      .order('id', { ascending: true });

    if (error) throw error;
    return res.status(200).json(posts);
  } catch (err) {
    console.error('Error fetching blogs:', err.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

/* ------------------------------------------------------------------ */
/*  GET  /blogs/:id  – return a single post                            */
/* ------------------------------------------------------------------ */
app.get('/blogs/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const { data: posts, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('id', id)
      .limit(1);

    if (error) throw error;
    if (!posts || posts.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    return res.status(200).json(posts[0]);
  } catch (err) {
    console.error(`Error fetching blog ${id}:`, err.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

/* ------------------------------------------------------------------ */
/*  POST /blogs  – (placeholder for future authenticated writes)       */
/* ------------------------------------------------------------------ */
// app.post('/blogs', async (req, res) => {
//   const { title, date, author, content } = req.body;
//   try {
//     const { error } = await supabase
//       .from('blogs')
//       .insert([{ title, date, author, content }]);
//     if (error) throw error;
//     return res.status(201).json({ message: 'Post created' });
//   } catch (err) {
//     console.error('Error creating blog:', err.message);
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

/* ------------------------------------------------------------------ */
/*  Catch-all for undefined routes                                    */
/* ------------------------------------------------------------------ */
app.use((req, res) => res.status(404).json({ error: 'Not Found' }));

/* ------------------------------------------------------------------ */
module.exports = app;   // Important: no app.listen() on Vercel
