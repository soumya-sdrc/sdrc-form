import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'optionFilter',
  pure:false
})
export class OptionFilterPipe implements PipeTransform {

  transform(options: any[], parentColumn: any, field: any): any {
    if(field.optionsParentColumn){
      return options.filter(option => {
        if(parentColumn.value)
        if(Array.isArray(parentColumn.value))
          return parentColumn.value.every(arr2Item => option.parentKey.includes(arr2Item))
          else
          return  option.parentKey.indexOf(parseInt(parentColumn.value))>-1
        else 
          return false;
      });
    }
    else{
      return options;
    }
  }

}
