const mongoose = require('mongoose');

// added applicationSchema + which is/will be embedded in the user 
const applicationSchema = mongoose.Schema({
  company: {
    type: String,
    required: true, 
  },
  title: {
    type: String, 
    required: true, 
  }, 
  notes: {
    type: String, 
    postingLink: String, 
    status: {
      type: String, 
      //enums are the options that you have as the value of  status 
      enum: ['interested', 'interviewing', 'rejected', 'accepted']
    }
  }
})

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // this is creating a 1 to many relationship using embedding 
  // 1 user has many applications, application belongs to uer
  // all the aplications are held in this array - with all the data as an object 
  applications: [applicationSchema]
});

//const Application = mongoose.model('Application', applicationSchema)
// module.exports 

const User = mongoose.model('User', userSchema);

module.exports = User;



/* 
example of what the data might look like: 
{
_id: 
username: 
password: 
applications: 
[
  {
    company: 
    title:
    notes: 
    enum:
  }, 
  {
    company: 
    title:
    notes: 
    enum:
  }
]
}
*/ 