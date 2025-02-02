import { Component } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-tessts',
  standalone: true,
  imports: [TableModule , PaginatorModule],
  templateUrl: './tessts.component.html',
  styleUrl: './tessts.component.scss'
})
export class TesstsComponent {

  customers: any = [
    {
      client: 'الشركة الألمانية للإبادة',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '',
      assignee: 'عبدالرحيم إسماعيل ناصف',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    },
    {
      client: 'الشركة الألمانية للإبادة',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'عبدالرحيم إسماعيل ناصف',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'عبدالرحيم إسماعيل ناصف',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'عبدالرحيم إسماعيل ناصف',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    },{
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'عبدالرحيم إسماعيل ناصف',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'عبدالرحيم إسماعيل ناصف',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'عبدالرحيم إسماعيل ناصف',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'عبدالرحيم إسماعيل ناصف',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'عبدالرحيم إسماعيل ناصف',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'عبدالرحيم إسماعيل ناصف',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'عبدالرحيم إسماعيل ناصف',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'عبدالرحيم إسماعيل ناصف',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'عبدالرحيم إسماعيل ناصف',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'عبدالرحيم إسماعيل ناصف',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'عبدالرحيم إسماعيل ناصف',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'عبدالرحيم إسماعيل ناصف',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }
  ];
  totalRecords: number = this.customers.length; // Total number of items in your dataset
  rows: number = 10; // Number of items per page
  first: number = 0; // Index of the first item for the current page

  // Function to handle page change
  onPage(event: any) {
    this.first = event.first;  // Update the first item index
    this.rows = event.rows;    // Update the number of rows per page
  }
}
