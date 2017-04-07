import express from 'express';

const router = express.Router();

router.get('/urls', (req, res) => {
  res.send({ urls: [] });
});

export default router;
