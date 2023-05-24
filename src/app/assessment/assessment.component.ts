import { Component, OnInit } from '@angular/core';
import { AssessmentService } from './assessment.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css'],
})
export class AssessmentComponent implements OnInit {
  events: any[];
  assesmentQuestions: any;
  currentQuestion: any;
  questionNumber: number = 1;
  questionSection: string = 'Firewall Implementation';
  hasPrevious: boolean = false;
  hasNext: boolean = true;
  onYesButton: boolean = false;
  onNoButton: boolean = false;
  answerClicked: boolean = false;
  currentAnswer: string = '';
  encryptionSkipped: boolean = false;

  constructor(private assessmentService: AssessmentService) {
    this.events = [
      {
        status: 'Firewall Implementation',
        color: '#ff6201',
      },
      {
        status: 'Encryption',
        color: '#dee2e6',
      },
      {
        status: 'Employee Training',
        color: '#dee2e6',
      },
      {
        status: 'Anti-malware',
        color: '#dee2e6',
      },
      {
        status: 'Policies',
        color: '#dee2e6',
      },
      {
        status: '2FA',
        color: '#dee2e6',
      },
    ];
  }

  ngOnInit(): void {
    localStorage.clear();
    this.currentQuestion =
      this.assessmentService.getFirewallImplementationQuestion(1);
  }

  onYes() {
    this.onYesButton = true;
    this.onNoButton = false;
    this.currentAnswer = 'yes';
    this.answerClicked = true;
  }

  onNo() {
    this.onNoButton = true;
    this.onYesButton = false;
    this.currentAnswer = 'no';
    this.answerClicked = true;
  }

  onNext() {
    this.assessmentService.updateAnswer(
      this.questionNumber,
      this.currentAnswer
    );
    this.resetYesNoButtons();
    this.questionNumber++;
    if (this.questionNumber > 1) {
      this.hasPrevious = true;
    }
    if (this.questionNumber >= 36) {
      this.hasNext = false;
    }
    this.navigateToSection('next');
  }

  onPrevious() {
    this.resetYesNoButtons();
    this.questionNumber--;
    if (this.questionNumber <= 1) {
      this.hasPrevious = false;
    }
    if (this.questionNumber < 36) {
      this.hasNext = true;
    }
    this.navigateToSection('previous');
  }

  resetYesNoButtons() {
    this.onYesButton = false;
    this.onNoButton = false;
    this.answerClicked = false;
  }

  navigateToSection(command: string) {
    if (
      this.questionNumber === 8 + 1 &&
      this.currentAnswer === 'no' &&
      command === 'next'
    ) {
      this.encryptionSkipped = true;
      this.questionNumber = 14;
      this.questionSection = 'Employee Training';
      this.currentQuestion = this.assessmentService.getEmployeeTrainingQuestion(
        this.questionNumber
      );
      return;
    }

    if (
      this.encryptionSkipped &&
      this.questionNumber === 14 - 1 &&
      command === 'previous'
    ) {
      this.encryptionSkipped = false;
      this.questionNumber = 8;
      this.questionSection = 'Encryption';
      this.currentQuestion = this.assessmentService.getEncryptionQuestion(
        this.questionNumber
      );
      return;
    }

    if (this.questionNumber > 7 && this.questionNumber <= 13) {
      this.questionSection = 'Encryption';
      this.currentQuestion = this.assessmentService.getEncryptionQuestion(
        this.questionNumber
      );
      this.updateProgressBar(2);
    } else if (this.questionNumber > 13 && this.questionNumber <= 18) {
      this.questionSection = 'Employee Training';
      this.currentQuestion = this.assessmentService.getEmployeeTrainingQuestion(
        this.questionNumber
      );
      this.updateProgressBar(3);
    } else if (this.questionNumber > 18 && this.questionNumber <= 24) {
      this.questionSection = 'Anti-malware';
      this.currentQuestion = this.assessmentService.getAntiMalwareQuestion(
        this.questionNumber
      );
      this.updateProgressBar(4);
    } else if (this.questionNumber > 24 && this.questionNumber <= 31) {
      this.questionSection = 'Policies';
      this.currentQuestion = this.assessmentService.getPolicyQuestion(
        this.questionNumber
      );
      this.updateProgressBar(5);
    } else if (this.questionNumber > 31 && this.questionNumber <= 36) {
      this.questionSection = 'Two Factor Authentication';
      this.currentQuestion =
        this.assessmentService.getTwoFactorAuthenticationQuestion(
          this.questionNumber
        );
      this.updateProgressBar(6);
    } else {
      this.currentQuestion =
        this.assessmentService.getFirewallImplementationQuestion(
          this.questionNumber
        );
    }
  }

  updateProgressBar(section: number) {
    if (section == 1) {
      this.events[0].color = '#ff6201';
      this.events[1].color = '#dee2e6';
      this.events[2].color = '#dee2e6';
      this.events[3].color = '#dee2e6';
      this.events[4].color = '#dee2e6';
      this.events[5].color = '#dee2e6';
    } else if (section == 2) {
      this.events[0].color = '#ff6201';
      this.events[1].color = '#ff6201';
      this.events[2].color = '#dee2e6';
      this.events[3].color = '#dee2e6';
      this.events[4].color = '#dee2e6';
      this.events[5].color = '#dee2e6';
    } else if (section == 3) {
      this.events[0].color = '#ff6201';
      this.events[1].color = '#ff6201';
      this.events[2].color = '#ff6201';
      this.events[3].color = '#dee2e6';
      this.events[4].color = '#dee2e6';
      this.events[5].color = '#dee2e6';
    } else if (section == 4) {
      this.events[0].color = '#ff6201';
      this.events[1].color = '#ff6201';
      this.events[2].color = '#ff6201';
      this.events[3].color = '#ff6201';
      this.events[4].color = '#dee2e6';
      this.events[5].color = '#dee2e6';
    } else if (section == 5) {
      this.events[0].color = '#ff6201';
      this.events[1].color = '#ff6201';
      this.events[2].color = '#ff6201';
      this.events[3].color = '#ff6201';
      this.events[4].color = '#ff6201';
      this.events[5].color = '#dee2e6';
    } else if (section == 6) {
      this.events[0].color = '#ff6201';
      this.events[1].color = '#ff6201';
      this.events[2].color = '#ff6201';
      this.events[3].color = '#ff6201';
      this.events[4].color = '#ff6201';
      this.events[5].color = '#ff6201';
    }
  }
}
