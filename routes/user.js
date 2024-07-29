var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let product = [
    {
      name: 'IPHONE 15 PRO MAX',
      catogary: 'phone',
      description: "this is good phone",
      image: "https://m.media-amazon.com/images/I/81SigpJN1KL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      name: "S24 ultraa",
      catogary: 'phone',
      description: 'this is good phone',
      image: "https://d2xamzlzrdbdbn.cloudfront.net/products/e81e9068-1627-4a02-aa05-5bbd259f3c2a24181130_416x416.jpg"
    },
    {
      name: "OnePlus 12 (Flowy Emerald, 16GB RAM, 512GB Storage) – Non PTA Approved",
      catogary: 'phone',
      description: 'this is good phone',
      image: "https://eezepc.com/wp-content/uploads/2024/04/Shop-OnePlus-12-Flowy-Emerald-16GB-RAM-512GB-Storage-EEZEPC-1.webp"
    },
    {
      name: "realme 12 Pro 5G",
      catogary: 'phone',
      description: 'this is good phone',
      image: "https://image01.realme.net/general/20240607/1717762990802bbd12343bbb243e9a7b38f8c8df6a22d.jpg.webp"
    }
  ]
  res.render('index',{product,admin:false});
}); 

module.exports = router;
