import {Component} from "@angular/core";
import {BackendService, ITree} from "../../shared/backend.service";
import {SaleDataService} from "../../shared/sell-data.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'app-sale',
    templateUrl: './sale.component.html',
    styleUrls: ['./sale.component.scss']
})
export class SaleComponent {
    public tree: ITree;

    addressForm = this.fb.group({
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        address: [null, Validators.required],
        zipCode: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required]
    });
    hasUnitNumber = false;

    states = [
        {name: 'Burgenland', abbreviation: 'BL'},
        {name: 'Carinthia', abbreviation: 'CA'},
        {name: 'Lower Austria', abbreviation: 'LA'},
        {name: 'Upper Austria', abbreviation: 'UA'},
        {name: 'Salzburg', abbreviation: 'SA'},
        {name: 'Styria', abbreviation: 'ST'},
        {name: 'Tyrol', abbreviation: 'TY'},
        {name: 'Vorarlberg', abbreviation: 'VB'},
        {name: 'Vienna', abbreviation: 'VI'}
    ];

    public constructor(private readonly dataService: SaleDataService,
                       private readonly backendService: BackendService,
                       private fb: FormBuilder,
                       private router: Router) {
        this.tree = dataService.tree!;
    }

    async onSubmit(): Promise<void> {
        await this.router.navigate(['paypal']);
    }
}