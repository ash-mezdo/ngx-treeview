﻿import { Component, EventEmitter, Input, Output, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { TreeviewI18n } from '../../models/treeview-i18n';
import { TreeviewItem } from '../../models/treeview-item';
import { TreeviewConfig } from '../../models/treeview-config';
import { TreeviewComponent } from '../treeview/treeview.component';
import { TreeviewHeaderTemplateContext } from '../../models/treeview-header-template-context';
import { TreeviewItemTemplateContext } from '../../models/treeview-item-template-context';
import { DropdownDirective } from '../../directives/dropdown.directive';

@Component({
  selector: 'ngx-dropdown-treeview',
  templateUrl: './dropdown-treeview.component.html',
  styleUrls: ['./dropdown-treeview.component.scss']
})
export class DropdownTreeviewComponent {
  @Input() buttonClass = 'btn-outline-secondary';
  @Input() caretClass: string;
  @Input() headerTemplate: TemplateRef<TreeviewHeaderTemplateContext>;
  @Input() itemTemplate: TemplateRef<TreeviewItemTemplateContext>;
  @Input() items: TreeviewItem[];
  @Input() config: TreeviewConfig;
  @Output() selectedChange = new EventEmitter<any[]>(true);
  @Output() filterChange = new EventEmitter<string>();
  @ViewChild(TreeviewComponent, { static: false }) treeviewComponent: TreeviewComponent;
  @ViewChild(DropdownDirective) dropdownDirective: DropdownDirective;
  buttonLabel: string;

  constructor(
    public i18n: TreeviewI18n,
    private defaultConfig: TreeviewConfig
  ) {
    this.config = this.defaultConfig;
  }

  onSelectedChange(values: any[]): void {
    this.buttonLabel = this.i18n.getText(this.treeviewComponent.selection);
    this.selectedChange.emit(values);
  }

  onFilterChange(text: string): void {
    this.filterChange.emit(text);
  }
}
