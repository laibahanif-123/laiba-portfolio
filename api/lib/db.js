/**
 * db.js — Cached MongoDB connection for Vercel Serverless Functions
 *
 * WHY THIS EXISTS:
 * Serverless functions are cold-started per request. If we call mongoose.connect()
 * every time, we open thousands of connections and exhaust the Atlas connection pool.
 * This module caches the connection in the Node.js module cache so that subsequent
 * warm invocations on the same Lambda instance reuse the existing connection.
 */

const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error(
    '❌ MONGO_URI environment variable is not set.\n' +
    'Set it in Vercel Dashboard → Project Settings → Environment Variables.'
  );
}

// Cache lives as long as the serverless function instance is warm
let cached = global._mongooseCache;

if (!cached) {
  cached = global._mongooseCache = { conn: null, promise: null };
}

async function connectDB() {
  // If already connected, return the existing connection
  if (cached.conn) {
    return cached.conn;
  }

  // If a connection attempt is in progress, wait for it
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    };

    cached.promise = mongoose
      .connect(MONGO_URI, opts)
      .then((mongooseInstance) => {
        console.log('✅ MongoDB connected (serverless cached connection)');
        return mongooseInstance;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null; // Reset so next invocation tries again
    throw err;
  }

  return cached.conn;
}

module.exports = connectDB;
