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

    public async ngOnChanges(changes: SimpleChanges): Promise<void> {
        await this.loadTrees(changes['selectedTreeType'].currentValue)
            .then();
    }

    private async loadTrees(type: string): Promise<void> {
        const ids = await this.backendService.getTreesOfType(type);
        const trees = [];
        for (const id of ids) {
            trees.push(await this.backendService.getTreeById(type, id));
        }
        console.log(JSON.stringify(trees));
    }
}
