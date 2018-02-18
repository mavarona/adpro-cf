import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: any, type: string = 'user'): any {

    let url = URL_SERVICES + '/image';

    if ( !img ) {
      return url + '/users/xxx';
    }

    if ( img.indexOf('https') >= 0 ) {
      return img;
    }

    switch ( type ) {
      case 'user':
        url += '/users/' + img;
        break;
      case 'doctor':
        url += '/doctors/' + img;
        break;
      case 'hospital':
        url += + '/hospitals/' + img;
        break;
      default:
        console.log('this image not exists');
        url += '/users/xxx';
    }

    return url;
  }

}
