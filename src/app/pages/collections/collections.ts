import { Component, computed, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DatePickerModule } from 'primeng/datepicker';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TabsModule } from 'primeng/tabs';
import { CollectionBanner } from '../../components/collection-banner/collection-banner';
import { InputNumberModule } from 'primeng/inputnumber';
import { TextareaModule } from 'primeng/textarea';
import { CollectionFooter } from '../../components/collection-footer/collection-footer';
import { TableModule } from 'primeng/table';
import { EmbryoTransferService } from '../../services/embryo-transfer';
import { DialogModule } from 'primeng/dialog';
import { EmbryoDataTable } from '../../components/embryo-data-table/embryo-data-table';

interface SelectData {
    name: string;
    code: string;
}

enum FreshStatus {
    Fresh = "Fresh",
    Frozen = "Frozen"
}

enum BullSex {
    Male = "M",
    Female = "F"
}

export interface Embryo {
    id: string;
    stage: number;
    quality: number;
    freshStatus: FreshStatus;
    firstBull: string; // ID
    secondBull?: string; // ID
    sex: BullSex;
    cap: string;
    status: string;
    thawingProtocol: string;
    tank: string;
    recipient?: string;
    recOwner?: string; // ID ?
    calvingRank?: string;
    transfertDate?: string;
    transferPlace?: string;
    transferOperator?: string; // ID ?
    pregnancyCheck?: string;
    breedingStatus?: string;
}

@Component({
    selector: 'syn-collections',
    imports: [
        CollectionBanner,
        CollectionFooter,
        EmbryoDataTable,
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
        ButtonModule,
        TableModule,
        DialogModule
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

    opuHour: Date[] | undefined;
    opuRoomComment: string | undefined;

    labMaturationHour: Date[] | undefined;

    maturationIncubators: SelectData[] | undefined;
    selectedMaturationIncubators: SelectData | undefined;

    maturationOperators: SelectData[] | undefined;
    selectedMaturationOperators: SelectData | undefined;

    opuLabComment: string | undefined;

    // Fourth step data
    bullIvfValue: any;
    locationIvfIncubatorValue: any;
    locationMaturingIncubatorValue: any;

    ivfLabs: SelectData[] | undefined;
    selectedIvfLab: SelectData | undefined;

    ivfStartHour: Date[] | undefined;

    ivfProblemTypes: SelectData[] | undefined;
    selectedIvfProblemType: SelectData | undefined;

    ivfProblemComment: string | undefined;

    ivfIncubators: SelectData[] | undefined;
    selectedIvfIncubator: SelectData | undefined;

    ivfProtocols: SelectData[] | undefined;
    selectedIvfProtocol: SelectData | undefined;

    // Fifth step data
    pfMotilityOptions: SelectData[] | undefined;
    selectedPfMotility: SelectData | undefined;

    pfHour: Date[] | undefined;

    pfProblemTypes: SelectData[] | undefined;
    selectedPfProblemType: SelectData | undefined;

    pfProblemComment: string | undefined;

    pfDevIncubators: SelectData[] | undefined;
    selectedPfDevIncubator: SelectData | undefined;

    pfProblemComment2: string | undefined;

    // Sixth step data
    embryosModalVisible: boolean = false;

    // Table data
    embryos!: Embryo[];
    selectedEmbryos!: Embryo[];

    constructor(private embryoTransferService: EmbryoTransferService) {}

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
        this.embryos = [
            {
                id: "35025070126001",
                stage: 4,
                quality: 1,
                freshStatus: FreshStatus.Frozen,
                firstBull: "VOLTAIRE - FR2941423468 - 19",
                sex: BullSex.Male,
                cap: "ORA",
                status: "EOR",
                thawingProtocol: "EG",
                tank: "PG01",
            },
            {
                id: "35025070126002",
                stage: 4,
                quality: 1,
                freshStatus: FreshStatus.Fresh,
                firstBull: "VOLTAIRE - FR2941423468 - 19",
                sex: BullSex.Female,
                cap: "ORA",
                status: "EOR",
                thawingProtocol: "EG",
                tank: "PG01",
            },
            {
                id: "35025070126003",
                stage: 4,
                quality: 1,
                freshStatus: FreshStatus.Fresh,
                firstBull: "VOLTAIRE - FR2941423468 - 19",
                sex: BullSex.Male,
                cap: "ORA",
                status: "EOR",
                thawingProtocol: "EG",
                tank: "PG01",
            },
            {
                id: "35025070126004",
                stage: 4,
                quality: 1,
                freshStatus: FreshStatus.Frozen,
                firstBull: "VOLTAIRE - FR2941423468 - 19",
                sex: BullSex.Male,
                cap: "ORA",
                status: "EOR",
                thawingProtocol: "EG",
                tank: "PG01",
            }
        ]
    }

    search(event: AutoCompleteCompleteEvent) {
        this.searchItems = [...Array(10).keys()].map(item => event.query + '-' + item);
    }

    // Called when selection of the table changes
    onSelectedEmbryosChange(): void {
        this.embryoTransferService.setSelectedEmbryos(this.selectedEmbryos);
    }

    showEmbryosDialog() {
        this.embryosModalVisible = true;
    }
}
