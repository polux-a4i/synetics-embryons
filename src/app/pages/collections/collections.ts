import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DatePickerModule } from 'primeng/datepicker';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TabsModule } from 'primeng/tabs';
import { Footer } from '../../components/footer/footer';
import { CollectionBanner } from '../../components/collection-banner/collection-banner';

interface CollectionOperator {
    name: string;
    code: string;
}

interface CollectionType {
    name: string;
    code: string;
}

interface Protocol {
    name: string;
    code: string;
}

interface Experiment {
    name: string;
    code: string;
}

interface Contract {
    name: string;
    code: string;
}

@Component({
  selector: 'syn-collections',
  imports: [CollectionBanner, TabsModule, InputTextModule, FormsModule, FloatLabel, SelectModule, DatePickerModule, AutoCompleteModule, CheckboxModule, ButtonModule],
  templateUrl: './collections.html',
  styleUrl: './collections.scss',
  standalone: true,
})
export class Collections implements OnInit {
    operators: CollectionOperator[] | undefined;
    selectedOperator: CollectionOperator | undefined;

    types: CollectionType[] | undefined;
    selectedType: CollectionType | undefined;

    protocols: Protocol[] | undefined;
    selectedProtocol: Protocol | undefined;

    experimentOptions: Experiment[] | undefined;
    selectedFirstExperiment: Experiment | undefined;
    selectedLastExperiment: Experiment | undefined;

    contracts: Contract[] | undefined;
    selectedContract: Contract | undefined;

    collectionDate: Date | undefined;

    searchItems: any[] = [];
    locationValue: any;
    ownerValue: any;
    donorValue: any;
    bullValue: any;

    embryoReleaseDate: Date | undefined;

    collectionOptions: string[] = [];

    search(event: AutoCompleteCompleteEvent) {
        this.searchItems = [...Array(10).keys()].map(item => event.query + '-' + item);
    }

    ngOnInit() {
        this.operators = [
            { name: 'Operator 1', code: 'op-1' },
            { name: 'Operator 2', code: 'op-2' },
            { name: 'Operator 3', code: 'op-3' },
            { name: 'Operator 4', code: 'op-4' },
            { name: 'Operator 5', code: 'op-5' }
        ];
        this.types = [
            { name: 'Type 1', code: 'type-1' },
            { name: 'Type 2', code: 'type-2' },
            { name: 'Type 3', code: 'type-3' },
            { name: 'Type 4', code: 'type-4' },
            { name: 'Type 5', code: 'type-5' }
        ];
        this.protocols = [
            { name: 'Protocol 1', code: 'protocol-1' },
            { name: 'Protocol 2', code: 'protocol-2' },
            { name: 'Protocol 3', code: 'protocol-3' },
            { name: 'Protocol 4', code: 'protocol-4' },
            { name: 'Protocol 5', code: 'protocol-5' }
        ];
        this.experimentOptions = [
            { name: 'Experiment 1', code: 'experiment-1' },
            { name: 'Experiment 2', code: 'experiment-2' },
            { name: 'Experiment 3', code: 'experiment-3' },
            { name: 'Experiment 4', code: 'experiment-4' },
            { name: 'Experiment 5', code: 'experiment-5' }
        ];
        this.contracts = [
            { name: 'Contract 1', code: 'contract-1' },
            { name: 'Contract 2', code: 'contract-2' },
            { name: 'Contract 3', code: 'contract-3' },
            { name: 'Contract 4', code: 'contract-4' },
            { name: 'Contract 5', code: 'contract-5' }
        ];
    }
}
