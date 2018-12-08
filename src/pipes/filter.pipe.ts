import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(user_info: any[], firstName: string): any[] {
    if (!user_info) {
        return [];
    }
    if (!firstName) {
        return user_info;
    }
firstName = firstName.toLowerCase();
return user_info.filter( value => {
      return value.first_name.toLowerCase().includes(firstName);
    });
   }
}
