const User = require('./User');
const Thought = require('./Thought');

User.hasMany(Thought, {
    foreignKey: 'user_id'
});

Thought.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Thought };