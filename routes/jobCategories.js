const express = require('express');
const router = express.Router();
const JobCategory = require('../models/JobCategory');

// POST /jobCategories - Ajouter une nouvelle catégorie d'emploi
router.post('/jobCategories', async (req, res) => {
    const categories = req.body;

    if (!Array.isArray(categories) || categories.length === 0) {
        return res.status(400).json({ error: 'Invalid data format' });
    }

    try {
        const values = categories.map(cat => [cat.category_name]);
        const sql = 'INSERT INTO job_categories (category_name) VALUES ?';
        
        await pool.query(sql, [values]);
        res.status(201).json({ message: 'Categories added successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

module.exports = router;
