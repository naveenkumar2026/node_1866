
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const godSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   Enter_Name: String,
   Enter_Email: String
})

const godModel = mongoose.model('god', godSchema, 'god');
export default godModel;
