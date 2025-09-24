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
import { InputNumberModule } from 'primeng/inputnumber';
import { TextareaModule } from 'primeng/textarea';

interface SelectData {
    name: string;
    code: string;
}

@Component({
    selector: 'syn-collections',
    imports: [
        CollectionBanner,
        TabsModule,
        InputTextModule,
        InputNumberModule,
        TextareaModule,
        FormsModule,
        FloatLabel,
        SelectModule,
        DatePickerModule,
        AutoCompleteModule,
        CheckboxModule,
        ButtonModule
    ],
    templateUrl: './collections.html',
    styleUrl: './collections.scss',
    standalone: true,
})
export class Collections implements OnInit {
    // First step data
    operators: SelectData[] | undefined;
    selectedOperator: SelectData | undefined;

    types: SelectData[] | undefined;
    selectedType: SelectData | undefined;

    protocols: SelectData[] | undefined;
    selectedProtocol: SelectData | undefined;

    experimentOptions: SelectData[] | undefined;
    selectedFirstExperiment: SelectData | undefined;
    selectedLastExperiment: SelectData | undefined;

    contracts: SelectData[] | undefined;
    selectedContract: SelectData | undefined;

    collectionDate: Date | undefined;

    searchItems: any[] = [];
    locationValue: any;
    ownerValue: any;
    donorValue: any;
    bullValue: any;

    embryoReleaseDate: Date | undefined;

    collectionOptions: string[] = [];

    // Second step data
    follicularPopulations: SelectData[] | undefined;
    selectedFollicularPopulations: SelectData | undefined;

    dfrAnomalies: SelectData[] | undefined;
    selectedDfrAnomalies: SelectData | undefined;

    // Third step data
    punctureRanks: SelectData[] | undefined;
    selectedPunctureRanks: SelectData | undefined;

    folliclesUnder: number | undefined;
    folliclesBetween: number | undefined;
    folliclesAbove: number | undefined;

    opuRoomComment: string | undefined;

    maturationIncubators: SelectData[] | undefined;
    selectedMaturationIncubators: SelectData | undefined;

    maturationOperators: SelectData[] | undefined;
    selectedMaturationOperators: SelectData | undefined;

    opuLabComment: string | undefined;

    // Fourth step data
    bullIvfValue: any;

    ivfLabs: SelectData[] | undefined;
    selectedIvfLab: SelectData | undefined;

    ivfProblemTypes: SelectData[] | undefined;
    selectedIvfProblemType: SelectData | undefined;

    ivfProblemComment: string | undefined;

    ivfIncubators: SelectData[] | undefined;
    selectedIvfIncubator: SelectData | undefined;

    ivfProtocols: SelectData[] | undefined;
    selectedIvfProtocol: SelectData | undefined;

    ngOnInit() {
        // First step data
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

    search(event: AutoCompleteCompleteEvent) {
        this.searchItems = [...Array(10).keys()].map(item => event.query + '-' + item);
    }
}
