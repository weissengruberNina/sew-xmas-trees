import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {BackendService} from "../../shared/backend.service";

@Component({
    selector: 'app-tree-list',
    templateUrl: './tree-list.component.html',
    styleUrls: ['./tree-list.component.scss']
})
export class TreeListComponent implements OnChanges {

    @Input()
    public selectedTreeType!: string;

    constructor(private readonly backendService: BackendService) {
    }

    public ngOnChanges(changes: SimpleChanges): void {
        console.log(`I got type: ${changes['selectedTreeType']}`);
    }

    private loadTrees(type: string): void {
        const ids = this.backendService.getTreesOfType(type);
    }
}
