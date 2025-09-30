import { Component, computed, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PopoverModule } from 'primeng/popover';

type Language = "fr" | "en" | "zh" | "es"
const languageName: Record<Language, string> = {
    "fr": "French",
    "en": "English",
    "es": "Spanish",
    "zh": "Chinese"
}

@Component({
  selector: 'syn-lang',
  imports: [
    ButtonModule,
    PopoverModule
  ],
  templateUrl: './lang.html',
  styleUrl: './lang.scss'
})
export class Lang {
    currentLang = signal<Language>("fr")
    currentLangName = computed(() => {
        return languageName[this.currentLang()]
    })
}
