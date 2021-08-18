import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {// we input a method
  //setter for property whenether the property is changed
  //whenether the condition we pass, paramether of this condition
  // unless needs to receive a value, the property that is getted
  // we check if the condition is not true
  // unless will be placed in ng-component
  // we can get access to this template
  @Input() set appUnless(condition: boolean) {
    // the method name must be the same as the selectors name
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
      // this method creates a view in this cintainer
      // the view is the template ref
    } else {
      this.vcRef.clear();
      // we will remove everything from this place
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }
  // view conteiner reference tha tis template by default
  // that marks the place where we will place this ref in the document
  // Angular marks this place


}
