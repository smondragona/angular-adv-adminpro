import { Component, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public IntervalosSubs: Subscription;
  constructor() { 

    // this.retornaObservable().pipe(
    //   retry(2)
    // ).subscribe(
    //   valor => console.log('Subs:',valor),
    //   error => console.warn('Error :',error),
    //   () => console.info('OBS TERMINADO')
    // );

  
    this.IntervalosSubs = this.retornaIntervalo()
        .subscribe(console.log);
  }
  ngOnDestroy(): void {

    this.IntervalosSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number>{
    return interval(100)
            .pipe(
              //take(10),
              map(valor => valor +1),
              filter(valor => (valor % 2 === 0) ? true:false)
              
            );
  }

  retornaObservable(): Observable<number>{
    let i = -1;

    return new Observable<number>( observe => {
      
      const intervalo = setInterval(() =>{
        i++;
        observe.next(i);
        if(i===4){
          clearInterval(intervalo);
          observe.complete();
        }

        if(i===2){
          //i = 0;
          observe.error('i llego al valor de 2');
        }
      }, 1000);

      
    });

    //return obs$;
  }

}
