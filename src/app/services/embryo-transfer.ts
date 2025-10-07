import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Embryo } from '../pages/collections/collections';

@Injectable({
  providedIn: 'root'
})
export class EmbryoTransferService {
    private selectedEmbryosSubject = new BehaviorSubject<Embryo[]>([]);
    public selectedEmbryos$: Observable<Embryo[]> = this.selectedEmbryosSubject.asObservable();

    setSelectedEmbryos(embryos: Embryo[]): void {
        this.selectedEmbryosSubject.next(embryos);
    }

    getCurrentSelectedEmbryos(): Embryo[] {
        return this.selectedEmbryosSubject.value;
    }
}
