import { Request, Response } from 'express';
import {godDao} from '../dao/godDao';
import { CustomLogger } from '../config/Logger'
let god = new godDao();

export class godService {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into godService.ts: GpGetAllValues')
     
     god.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from godService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into godService.ts: GpCreate')
     const  godData = req.body;
     god.GpCreate(godData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from godService.ts: GpCreate')
         callback(response);
         });
    }


}