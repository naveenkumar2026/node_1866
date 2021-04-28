import { Request, Response } from 'express';
import { godService } from '../service/godService';
import { CustomLogger } from '../config/Logger'
let god = new godService();

export class godController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
god.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into godController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from godController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
god.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into godController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from godController.ts: GpCreate');
    })}


}