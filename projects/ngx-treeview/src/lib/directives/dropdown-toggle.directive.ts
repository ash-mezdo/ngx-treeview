import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';

@Directive({
  selector: '[ngxDropdownToggle]',
  host: {
    'class': 'dropdown-toggle',
    'aria-haspopup': 'true',
    '[attr.aria-expanded]': 'dropdown.isOpen',
    '(click)': 'dropdown.toggle()'
  }
})
export class DropdownToggleDirective implements OnInit {
  @Input() caretClass: string;

  constructor(
    public dropdown: DropdownDirective,
    private _elementRef: ElementRef,
    private _renderer: Renderer2
  ) {
    this.dropdown.toggleElement = _elementRef.nativeElement;
  }

  ngOnInit(): void {
    if(this.caretClass) {
      const newCaret  = this._renderer.createElement('span');
      this._renderer.setAttribute(newCaret, 'class', this.caretClass);
      this._renderer.appendChild(this._elementRef.nativeElement, newCaret);
      this._renderer.addClass(this._elementRef.nativeElement, 'disable-bootstrap-caret');
    }
  }
}
