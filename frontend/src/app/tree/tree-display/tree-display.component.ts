import {Component, Input, OnInit} from '@angular/core';
import {BackendService, ITree} from "../../shared/backend.service";
import {SaleDataService} from "../../shared/sell-data.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-tree-display',
    templateUrl: './tree-display.component.html',
    styleUrls: ['./tree-display.component.scss']
})
export class TreeDisplayComponent implements OnInit {

    @Input()
    public treeId!: number;

    @Input()
    public type!: string;

    public tree: ITree | null;

    public constructor(private readonly backendService: BackendService,
                       private readonly sellDateService: SaleDataService,
                       private readonly router: Router) {
        this.tree = null;
    }

    public async ngOnInit(): Promise<void> {
        this.tree = await this.backendService.getTreeById(this.type, this.treeId);
    }

    public get btnText(): string {
        return this.tree?.sold ? 'Sold' : 'Buy';
    }

    public buyTree(): void {
        this.sellDateService.tree = this.tree;
        this.router.navigate(['sale']);
    }
}
