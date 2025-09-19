import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { CheckboxModule } from 'primeng/checkbox';
import { DatePickerModule } from 'primeng/datepicker';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TabsModule } from 'primeng/tabs';

interface CollectionOperator {
    name: string;
    code: string;
}

interface CollectionType {
    name: string;
    code: string;
}

@Component({
  selector: 'syn-collections',
  imports: [TabsModule, InputTextModule, FormsModule, FloatLabel, SelectModule, DatePickerModule, AutoCompleteModule, CheckboxModule],
  templateUrl: './collections.html',
  styleUrl: './collections.scss',
  standalone: true,
})
export class Collections implements OnInit {
    operators: CollectionOperator[] | undefined;
    selectedOperator: CollectionOperator | undefined;

    types: CollectionType[] | undefined;
    selectedType: CollectionType | undefined;

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
    }
}
