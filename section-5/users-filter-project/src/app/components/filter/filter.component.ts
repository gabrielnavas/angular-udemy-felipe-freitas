import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit {
  @Output('onClickFilter') onCLickFilterEmitt = new EventEmitter<IFilterOptions>();

  filterOptions: IFilterOptions = {} as IFilterOptions;

  statusList = [
    { description: 'Ativo', value: true },
    { description: 'Inativo', value: false },
  ]

  ngOnInit(): void {
    this.initFilterOptions();
  }

  onClickFilter() {
    this.onCLickFilterEmitt.emit(this.filterOptions);
  }

  onClickResetFilter() {
    this.initFilterOptions();
    this.onClickFilter();
  }

  private initFilterOptions() {
    this.filterOptions = {
      name: undefined,
      startDate: undefined,
      endDate: undefined,
      status: undefined,
    }
  }
}
