import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DeveloperResponse} from "../../core/models/developer.model";
import {PremiseResponse} from "../../core/models/premise.model";
import {PremiseService} from "../../core/services/premise.service";
import {DeveloperService} from "../../core/services/developer.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from '@angular/material/dialog';
import {DeleteConfirmationDialogComponent} from "../delete-confirmation-dialog/delete-confirmation-dialog.component";
import {PremiseDialogComponent} from './premise-dialog/premise-dialog.component';

@Component({
  selector: 'app-premise',
  templateUrl: './premise.component.html',
  styleUrls: ['./premise.component.scss']
})
export class PremiseComponent implements OnInit {
  @Input() adminView: boolean = false;
  developers: DeveloperResponse[] = [];
  selectedDeveloper: DeveloperResponse | null = null;
  premises: PremiseResponse[] = [];
  pagedPremises: PremiseResponse[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  currentPage: number = 0;
  pageSize: number = 5;

  constructor(
    private premiseService: PremiseService,
    private developerService: DeveloperService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchDevelopers();
  }

  fetchDevelopers(): void {
    this.developerService.fetchAllDevelopers().subscribe((response) => {
      this.developers = response.developers;
    });
  }

  selectDeveloper(developer: DeveloperResponse): void {
    this.selectedDeveloper = developer;
    this.fetchPremises();
  }

  fetchPremises(): void {
    if (this.selectedDeveloper) {
      this.premiseService.getPremisesByInvestmentId(this.selectedDeveloper.id).subscribe({
        next: (response) => {
          this.premises = response.premisesGetResponse;
          this.updatePagedPremises();
        },
        error: (error) => {
          console.error('Error fetching premises:', error);
        }
      });
    }
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePagedPremises();
  }

  updatePagedPremises(): void {
    const startIndex = this.currentPage * this.pageSize;
    this.pagedPremises = this.premises.slice(startIndex, startIndex + this.pageSize);
  }

  addNewPremise(): void {
    const dialogRef = this.dialog.open(PremiseDialogComponent, {
      width: '400px',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.premiseService.createPremise(result).subscribe(() => {
          this.fetchPremises();
        });
      }
    });
  }

  editPremise(premise: PremiseResponse): void {
    const dialogRef = this.dialog.open(PremiseDialogComponent, {
      width: '400px',
      data: premise
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.premiseService.updatePremise(premise.id.toString(), result).subscribe(() => {
          this.fetchPremises();
        });
      }
    });
  }

  deletePremise(premise: PremiseResponse): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '250px',
      data: { title: 'Delete Premise', message: 'Do you really want to delete this premise?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.premiseService.deletePremise(premise.id.toString()).subscribe(() => {
          this.fetchPremises();
        });
      }
    });
  }
}
