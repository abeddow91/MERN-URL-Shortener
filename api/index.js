import express from 'express';
import mongoose from 'mongoose';

//keeps the connection to the database open the whole time.
mongoose.connect('mongodb://localhost:27017/test');

var Schema = mongoose.Schema;

const router = express.Router();


var urlSchema = new Schema ({
  longUrl: {type: String, required: true},
  short: {type: Number, required: true}
});

var UrlData = mongoose.model('UrlData', urlSchema);

router.get('/urls', function (req, res) {
  UrlData.find()
  .then(function(doc) {
    res.send(doc);
  });
});

function counter(err, count) {
  if(count>0) {
    //its not unique
    return true;
  } else {
    return false;
  }
}

function genRand() {
  return Math.floor(Math.random()*89999+10000);
}

router.post('/insert', function (req, res) {
  var count = 0;
  console.log(req.body);
  var notUnique = true;
  var number = genRand();
  while (notUnique) {
    UrlData.count({short: number}, notUnique = counter(count));
    if (notUnique) {
      number = genRand();
    }
  }
  var item = {
    longUrl: req.body.longUrl,
    short: number
  };
  var data = new UrlData(item);
  //will save to database
  data.save();
  res.send(item);
});


router.get('/:short', function (req, res) {
  UrlData.findOne({ short: req.params.short}, function (err, url) {
    if (err) {
      console.log(err);
      res.send('sorry this page does not exist');
    };
    var longUrl = url.longUrl
    res.redirect(longUrl);
  });
});



export default router;
