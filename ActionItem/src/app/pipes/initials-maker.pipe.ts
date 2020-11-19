import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'initialsMaker' })
export class InitialsMaker implements PipeTransform {
  transform(value: string): string {
    let splits = value.split(" ");
    let initials = ""
    for(let split of splits){
      initials += split[0].toUpperCase()
    }
    
    return initials
    

  }
}