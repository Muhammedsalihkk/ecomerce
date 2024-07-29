const { MongoDBCollectionNamespace } = require('mongodb')

const MongoClient = require('mongodb').MongoClient
const state = {
    db: null
}
 function connect (done) {
    const url = 'mongodb://localhost:27017'
    const dbname = 'ecomerce'

    MongoClient.connect(url).then((data) => {
        state.db = data.db(dbname)
        console.log('databse created')
        done()
        
    }).then((result)=>{
        console.log('hoi')
    })



}

function get(){
    return state.db
}
module.exports={connect,get}
console.log()
