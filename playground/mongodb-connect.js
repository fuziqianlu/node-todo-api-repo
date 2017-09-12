const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to Mongodb server', err);
  }
  console.log('Connect to MongoDB');
  db.collection('Todos').insertOne({
    'text':'Something to do',
    'completed':false
  }, (err, result)=>{
    if(err){
      return console.log('Unable to do insert!', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.collection('Users').insertOne({
    'name':'Andrew',
    'age':25,
    'location':'LA'
  }, (err, result)=>{
    if(err){
      return console.log('Unable to insert', err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));

  });

  db.close();
});
