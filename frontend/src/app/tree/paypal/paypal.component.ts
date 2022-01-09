import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {SaleDataService} from "../../shared/sell-data.service";
import {BackendService, ITree} from "../../shared/backend.service";

class SellDateService {
}

@Component({
    selector: 'app-paypal',
    templateUrl: './paypal.component.html',
    styleUrls: ['./paypal.component.scss']
})
export class PaypalComponent {

    paypalForm = this.fb.group({
        email: [null, Validators.compose([
            Validators.required, Validators.email])
        ],
        iban: [null, Validators.required],
    });

    public tree: ITree;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private readonly dataService: SaleDataService,
        private readonly backendService: BackendService
    ) {
        this.tree = dataService.tree!;
    }

    ngOnInit(): void {
    }

    async onSubmit(): Promise<void> {
        if (this.tree) {
            this.backendService.buyTree(this.tree).then(console.log);
            this.router.navigate(['*']);
        }
    }
}
