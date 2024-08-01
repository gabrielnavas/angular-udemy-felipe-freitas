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
    { description: 'Todos', value: undefined },
    { description: 'Ativo', value: true },
    { description: 'Inative', value: false },
  ]

  ngOnInit(): void {
    this.initFilterOptions();
  }

  onClickFilter() {
    this.onCLickFilterEmitt.emit(this.filterOptions);
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
