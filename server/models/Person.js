import mongoose from 'mongoose';

const Person = mongoose.model('Person', {
  name: String,
  image: String
});

export default Person;