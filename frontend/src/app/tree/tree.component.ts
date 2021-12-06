import { Component, OnInit } from '@angular/core';
import {BackendService} from "../shared/backend.service";

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  constructor(private readonly backend: BackendService) { }

  ngOnInit(): void {
  }

}
