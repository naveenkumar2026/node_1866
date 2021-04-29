import { Component, OnInit } from '@angular/core';
import { CreateService } from './create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})

export class CreateComponent implements OnInit {
    public god = {
        enter_name: '',
        enter_email: '',
    }

    constructor (
        private createService: CreateService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createService.GpCreate(this.god).subscribe(data => {
            this.god.enter_name = ''
 	 	this.god.enter_email = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}