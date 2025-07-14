import {ChangeDetectionStrategy, Component, viewChild} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-expanel',
  providers: [provideNativeDateAdapter()],
  imports: [MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule],
  templateUrl: './expanel.html',
  styleUrl: './expanel.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Expanel {
  accordion = viewChild.required(MatAccordion);

}
