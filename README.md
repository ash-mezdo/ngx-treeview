## Notes

This repository is forked from [leovo2708's ngx-treeview](https://github.com/leovo2708/ngx-treeview).

It adds compatibility with Angular 14+, bug fixes, and additional features. For more info visit the original repository.

Package link: https://www.npmjs.com/package/@ash-mezdo/ngx-treeview

## Install

```bash
npm i -s @ash-mezdo/ngx-treeview
```
## Additional Features

#### Dropdown treeview with optional caret override:

```html
<ngx-dropdown-treeview
  [caretClass]="fa-solid fa-angle-down"
  [items]="items"
  (selectedChange)="onSelectedChange($event)"
  (filterChange)="onFilterChange($event)"
>
</ngx-dropdown-treeview>
```