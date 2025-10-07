import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Subscription } from 'rxjs';
import { EmbryoTransferService } from '../../services/embryo-transfer';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';

interface SelectData {
    name: string;
    code: string;
}

@Component({
  selector: 'syn-collection-footer',
  imports: [
    ButtonModule,
    FormsModule,
    InputTextModule,
    AutoCompleteModule,
    SelectModule,
    DatePickerModule
  ],
  templateUrl: './collection-footer.html',
  styleUrl: './collection-footer.scss'
})
export class CollectionFooter {
    private subscription?: Subscription;
    hasSelectedEmbryos: boolean = false;

    // Transfer data
    transferDate: Date | undefined;
    searchItems: any[] = [];
    transferPlace: any;
    recipientOwner: any;

    transferIncubators: SelectData[] | undefined;
    selectedTransferIncubator: SelectData | undefined;

    transferThawingProtocols: SelectData[] | undefined;
    selectedTransferThawingProtocol: SelectData | undefined;

    transferHeatSyncProtocols: SelectData[] | undefined;
    selectedTransferHeatSyncProtocol: SelectData | undefined;

    constructor(private embryoTransferService: EmbryoTransferService) {}

    ngOnInit(): void {
        this.subscription = this.embryoTransferService.selectedEmbryos$.subscribe(
            embryos => {
                this.hasSelectedEmbryos = embryos.length > 0
            }
        );
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }

    search(event: AutoCompleteCompleteEvent) {
        this.searchItems = [...Array(10).keys()].map(item => event.query + '-' + item);
    }
}
