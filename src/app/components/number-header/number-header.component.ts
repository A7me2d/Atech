import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { MenuItem } from 'primeng/api';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-number-header',
  standalone: true,
  imports: [TooltipModule,CommonModule, InputTextModule , TieredMenuModule , ButtonModule],
  templateUrl: './number-header.component.html',
  styleUrl: './number-header.component.scss'
})
export class NumberHeaderComponent implements OnInit {

      items: MenuItem[] | undefined;
 ngOnInit() {
    this.items = [
      {
        label: 'تعديل الرقم',
        icon: 'pi pi-pencil',
      },
      {
        label: 'إلغاء التعيين',
        icon: 'fa-solid fa-link-slash',
      },
    ];
  }


numberdisplay = 'عرض الرقم';
  phoneNumber = '012345678910';

  phonetext = 'قيد الإستخدام';

  protocol = 'اسم البروتوكول';
  protocolName = 'فودافون مصر';
  lastUpdate = 'تاريخ آخر شحنة';
  lastUpdateDate = '2024/12/29';

  contermain = 'الدولة';
  country = 'جمهورية مصر العربية';
  countryFlag = '/assets/img/Flag_of_Egypt.svg.png';
  balancerate = 'الرصيد الحالي';
  balance = 5000 + ' ج.م';


  cilint = 'العميل الحالي';
  currentClient = 'الشركة الألمانية للإبادة الحشرات';
  clientLogo = '/assets/img/Flag_of_Egypt.svg.png';
  curanumber = 'الرصيد المستخدم للعميل الحالي';
  canumber = 5000 + ' ج.م';

  extensions = 'عدد الإمتدادات';
  extensionNumber = '09';
  balanecesall = 'الرصيد المستخدم للرقم ككل';
  balanceNumber = 5000 + ' ج.م';




}
