import { Component, OnInit } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit {
  filterOptions: IFilterOptions = {} as IFilterOptions;

  statusList = [
    { description: 'Ativo', value: true },
    { description: 'Inative', value: false },
  ]

  ngOnInit(): void {
    this.initFilterOptions();
  }

  onClickFilter() {
    console.log(this.filterOptions)
  }

  dateSelected(event: any) {
    console.log(event);
  }

  private initFilterOptions() {
    const now = new Date();
    const oneMonth = new Date(now.setMonth(now.getMonth() + 1));

    this.filterOptions = {
      name: '',
      startDate: now,
      endDate: oneMonth,
      status: false,
    }
  }
}
