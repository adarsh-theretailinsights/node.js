const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const formSchema = new Schema({
    id: ObjectId,
    fullName: String,
    email: String,
    description: String,
    check: Boolean,
    form_Created_at: Date,
    form_Udated_at: Date,
    form_Deleted_at: Date
});

formSchema.pre('save', function(next) {
    now = new Date();
    this.form_Udated_at = now;
    if (!this.form_Created_at) {
        this.form_Created_at = now;
    }
    next();
});


module.exports = mongoose.model('Form', formSchema);