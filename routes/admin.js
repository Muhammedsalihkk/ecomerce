var express = require('express');
var router = express.Router();
var product_helpers=require('../helpers/product_helper')
/* GET users listing. */
router.get('/', function (req, res, next) {
  let product = [
    {
      name: 'IPHONE 15PROMAX',
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
      name: "OnePlus 12",
      catogary: 'phone',
      description: 'this is good phone',
      image: "https://eezepc.com/wp-content/uploads/2024/04/Shop-OnePlus-12-Flowy-Emerald-16GB-RAM-512GB-Storage-EEZEPC-1.webp"
    },
    {
      name: "realme 12Pro",
      catogary: 'phone',
      description: 'this is good phone',
      image: "https://image01.realme.net/general/20240607/1717762990802bbd12343bbb243e9a7b38f8c8df6a22d.jpg.webp"
    }
  ]
  res.render('admin/ViewProducts', { product, admin: true });
});
router.get('/add_product', function (req, res) {
  res.render('admin/add_product')
})
router.post('/add_product',(req,res)=>{
  
  console.log(req.body)
  console.log(req.files.image)
  product_helpers.addproduct(req.body,(result)=>{
    res.render("admin/add_product") 
  })
})
module.exports = router;
