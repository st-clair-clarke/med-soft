import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'med-soft-registration-entry',
  template: `<med-soft-nx-welcome></med-soft-nx-welcome>`,
})
export class RemoteEntryComponent {}
