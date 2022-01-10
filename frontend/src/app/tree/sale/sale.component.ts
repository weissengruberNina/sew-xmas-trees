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
        zipCode: [null, [Validators.required,
            Validators.minLength(4),
            Validators.maxLength(4),
            Validators.pattern(/^[0-9]+$/)]
        ],
        city: [null, Validators.required],
        state: [null, Validators.required]
    });

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