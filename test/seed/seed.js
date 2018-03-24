const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require ('./../../models/todo');
const {User} = require ('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

// for User
const users = [{
    _id: userOneId,
    email: 'hoang@example.com',
    password: 'Hoangspassword',
    tokens: [{
        access: 'auth',
        token:  jwt.sign({_id: userOneId, access: 'auth'}, process.env.JWT_SECRET).toString()
        }]
    },
    {
        _id: userTwoId,
        email: 'ly@example.com',
        password: 'Lyspassword',
        tokens: [{
        access: 'auth',
        token:  jwt.sign({_id: userTwoId, access: 'auth'}, process.env.JWT_SECRET).toString()
        }]
    }
];

// for Todo
const todos = [{
    _id: new ObjectID(),
    text: 'First',
    _creator: userOneId
}, {
    _id: new ObjectID(),
    text: 'Second',
    completed: true,
    completedAt: 123,
    _creator: userTwoId
}];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
       return Todo.insertMany(todos);
    }). then(() => done());
};

const populateUsers = ((done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();
//
        return Promise.all([userOne, userTwo])
    }).then(() => done());
//
});

module.exports = {todos, populateTodos, users, populateUsers};