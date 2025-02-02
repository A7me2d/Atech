import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgxPaginationModule, FormsModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  tableData = [
    {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '',
      assignee: 'أحمد هاني مكرم طه',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    },
    {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'أحمد هاني مكرم طه',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    },
    {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'أحمد هاني مكرم طه',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    },
    {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'أحمد هاني مكرم طه',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'أحمد هاني مكرم طه',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'أحمد هاني مكرم طه',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'أحمد هاني مكرم طه',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'أحمد هاني مكرم طه',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'أحمد هاني مكرم طه',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'أحمد هاني مكرم طه',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'أحمد هاني مكرم طه',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'أحمد هاني مكرم طه',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'أحمد هاني مكرم طه',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'أحمد هاني مكرم طه',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'أحمد هاني مكرم طه',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'أحمد هاني مكرم طه',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'أحمد هاني مكرم طه',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'أحمد هاني مكرم طه',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'أحمد هاني مكرم طه',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'أحمد هاني مكرم طه',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'أحمد هاني مكرم طه',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }, {
      client: 'الشركة الألمانية للإبادة الحشرات',
      clientLogo: 'assets/img/Flag_of_Egypt.svg.png',
      assignDate: '01/12/2024',
      cancelDate: '01/12/2024',
      assignee: 'أحمد هاني مكرم طه',
      internationalMinutes: 122,
      localMinutes: 7654,
      amount: 61890
    }
  ];

  page: number = 1;
  itemsPerPage: number = 5;

  onItemsPerPageChange() {
    this.page = 1;
  }
}
