import { Component } from '@angular/core';
import { NumberHeaderComponent } from "../number-header/number-header.component";
import { TableComponent } from "../table/table.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-number-parent',
  standalone: true,
  imports: [NumberHeaderComponent, TableComponent, FooterComponent],
  templateUrl: './number-parent.component.html',
  styleUrl: './number-parent.component.scss'
})
export class NumberParentComponent {
numbersData = [
    {
      number: "0123456789",
      name: "عميل 1",
      country: "مصر",
      flag: "https://flagcdn.com/w320/eg.png",
      balance: 5000,
      lastUpdate: "2024-01-29"
    },
    {
      number: "0987654321",
      name: "عميل 2",
      country: "السعودية",
      flag: "https://flagcdn.com/w320/sa.png",
      balance: 7000,
      lastUpdate: "2024-01-30"
    },
    {
      number: "0112233445",
      name: "عميل 3",
      country: "الإمارات",
      flag: "https://flagcdn.com/w320/ae.png",
      balance: 9000,
      lastUpdate: "2024-01-31"
    }
  ];

  selectedNumber = this.numbersData[0]; 

  selectNumber(index: number) {
    this.selectedNumber = this.numbersData[index];
  }
}
