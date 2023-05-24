import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../assessment/assessment.service';

@Component({
  selector: 'app-risk-profile',
  templateUrl: './risk-profile.component.html',
  styleUrls: ['./risk-profile.component.css'],
})
export class RiskProfileComponent implements OnInit {
  riskLevel: string = '';
  image: string = '';
  riskPercentage: number = -1;
  solutions: any[] = [];
  getRecommendations: boolean = false;
  selectedSolution: number | null = null;

  constructor(private assessmentService: AssessmentService) {}

  ngOnInit(): void {
    const riskPercentage = localStorage.getItem('riskPercentage');

    console.log(riskPercentage);

    if (riskPercentage !== null && +riskPercentage > -1) {
      this.riskPercentage = parseInt(riskPercentage);
      console.log(this.riskPercentage);
    } else {
      this.riskPercentage = this.assessmentService.getRiskPercentage();
      console.log(this.riskPercentage);
      localStorage.setItem('riskPercentage', this.riskPercentage.toString());
    }

    if (this.riskPercentage <= 39) {
      this.riskLevel = 'Low Risk';
      this.image = 'low-risk';
    } else if (this.riskPercentage > 39 && this.riskPercentage <= 69) {
      this.riskLevel = 'Medium Risk';
      this.image = 'medium-risk';
    } else {
      this.riskLevel = 'High Risk';
      this.image = 'high-risk';
    }
  }

  onGetRecommendations() {
    this.getRecommendations = true;

    const solutions = localStorage.getItem('solutions');

    if (solutions !== null && solutions.length > 0) {
      this.solutions = JSON.parse(solutions);
    } else {
      this.solutions = this.assessmentService.getSolutions();
      localStorage.setItem('solutions', JSON.stringify(this.solutions));
    }
  }

  toggleCollapse(index: number): void {
    if (this.selectedSolution === index) {
      this.selectedSolution = null;
    } else {
      this.selectedSolution = index;
    }
  }

  isSolutionOpen(index: number): boolean {
    return this.selectedSolution === index;
  }
}
