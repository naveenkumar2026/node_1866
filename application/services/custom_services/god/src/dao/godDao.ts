import * as mongoose from 'mongoose';
import godModel from '../models/god';
import { CustomLogger } from '../config/Logger'


export class godDao {
    private god = godModel;
    constructor() { }
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into godDao.ts: GpGetAllValues')

this.god.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from godDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(godData, callback){
new CustomLogger().showLogger('info', 'Enter into godDao.ts: GpCreate')
let temp = new godModel(godData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from godDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}