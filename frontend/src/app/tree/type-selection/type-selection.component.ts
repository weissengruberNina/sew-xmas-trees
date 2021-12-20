import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../shared/backend.service";

@Component({
    selector: 'app-type-selection',
    templateUrl: './type-selection.component.html',
    styleUrls: ['./type-selection.component.scss']
})
export class TypeSelectionComponent implements OnInit {

    public treeTypes: string[] | null;
    public selectedType: string | null;

    constructor(private readonly backend: BackendService) {
        this.treeTypes = null;
        this.selectedType = null;
    }

    public ngOnInit(): void {
        this.backend.getAllTreeTypes()
            .subscribe({
                next: res => {
                    this.treeTypes = res;
                    if (res.length > 0) {
                        this.selectedType = res[0];
                    }
                },
                error: err => {
                    console.log(err.messageText)
                }
            });
    }

}
