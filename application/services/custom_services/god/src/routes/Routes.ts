import { Request, Response, NextFunction } from "express";
import { godController } from '../controller/godController';


export class Routes {
    private god: godController = new godController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/god').get(this.god.GpGetAllValues);
app.route('/god').post(this.god.GpCreate);
     }

}