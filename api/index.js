import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/test');

var Schema = mongoose.Schema;

var urlSchema = new Schema ({
  longUrl: {type: String, required: true},
  shortId: {type: Number, required: true}
});

var UrlData = mongoose.model('UrlData', urlSchema);

const router = express.Router();

router.get('/urls', (req, res) => {
  UrlData.find()
  .then(function(doc) {
    res.send(doc);
  });
});

export default router;
