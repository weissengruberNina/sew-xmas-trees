import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-tree-list',
    templateUrl: './tree-list.component.html',
    styleUrls: ['./tree-list.component.scss']
})
export class TreeListComponent implements OnChanges {

    @Input()
    public selectedTreeType!: string;

    constructor() {
    }

    public ngOnChanges(changes: SimpleChanges): void {
        console.log(`I got type: ${changes['selectedTreeType']}`);
    }

}
