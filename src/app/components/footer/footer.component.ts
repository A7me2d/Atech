import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
craatename = 'تم الأنشاء بواسطة';
name = 'أحمد هاني مكرم طه';
img = '/assets/img/hero.png';
dateofcreation = 'تاريخ الإنشاء';
date = '02/02/2025';
time = '04:00' + ' م';

}
