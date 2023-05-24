import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AssessmentService {
  questions;
  score: { questionId: number; answer: string }[] = [];
  riskPercentage: number;

  constructor() {
    this.riskPercentage = 0;
    this.questions = {
      firewallImplementation: [
        {
          id: 1,
          question: 'Is the firewall network segmented in the health sector?',
          answer: 'yes',
          solution:
            'it is recommended the network is segmented to isolate delicate systems and data from other areas of the network to reduce the possibility of harm in the event of a breach.',
        },
        {
          id: 2,
          question:
            'Are firewall logs consistently checked for possible security incidents?',
          answer: 'yes',
          solution: 'a strong log monitoring system is strongly advised.',
        },
        {
          id: 3,
          question:
            'Are firewall administrators educated and taught on the most recent security procedures and dangers specific to the healthcare industry?',
          answer: 'yes',
          solution: 'give training top priority.',
        },
        {
          id: 4,
          question:
            'Are the newest security patches and upgrades applied to the firewall firmware or software?',
          answer: 'yes',
          solution: 'the upgrade is recommended.',
        },
        {
          id: 5,
          question:
            'Does the firewall play a key role in the incident response plan that is in place for handling security incidents?',
          answer: 'yes',
          solution: 'firewall inclusion is highly advised.',
        },
        {
          id: 6,
          question:
            'Has the effectiveness of the firewall implementation been evaluated by independent penetration tests?',
          answer: 'yes',
          solution: 'a penetration test is recommended.',
        },
        {
          id: 7,
          question:
            'Have VPN tunnels and DMZ been put in place to provide secure remote access to the network serving the healthcare industry?',
          answer: 'yes',
          solution: 'set up VPN tunnels and a DMZ.',
        },
      ],
      encryption: [
        {
          id: 8,
          question: 'Does your organisation use encryption?',
          answer: 'yes',
          solution:
            'make other questions unavailable and recommend implementing encryption.',
        },
        {
          id: 9,
          question:
            'Does your organization have a well-defined and regularly updated encryption strategy that incorporates the latest encryption algorithms and protocols recommended by industry-leading organizations and security experts, ensuring that encryption practices are consistently aligned with the most current standards and best practices?',
          answer: 'yes',
          solution:
            'The protocols, policy, and framework of the encryption should be documented.',
        },
        {
          id: 10,
          question: 'Does your organization make use of asymmetric encryption?',
          answer: 'yes',
          solution:
            'Asymmetric encryption should be implemented into the encryption framework.',
        },
        {
          id: 11,
          question:
            'Does your organisation provide comprehensive training or awareness programs to educate employees about encryption best practices, potential risks, and their roles and responsibilities in maintaining the security of encrypted data?',
          answer: 'yes',
          solution:
            'Regular updates and training should be given to the hospital staff.',
        },
        {
          id: 12,
          question:
            'Is encryption key generation, storage, and rotation handled with security procedures and protocols to ensure the confidentiality and integrity of sensitive data?',
          answer: 'yes',
          solution:
            'A secure key encryption policy should urgently be implemented.',
        },
        {
          id: 13,
          question:
            'Has your organisation recently conducted thorough security audits or penetration tests to assess the robustness and effectiveness of its encryption measures?',
          answer: 'yes',
          solution:
            'Conduct regular security audits and penetration testing to test the strength of the encryption system.',
        },
      ],
      employeeTraining: [
        {
          id: 14,
          question: 'Do you conduct Cyber-Security Employee training?',
          answer: 'yes',
          solution: 'effective and efficient Employee training is recommended.',
        },
        {
          id: 15,
          question: 'Is there a routine/quarterly retraining of Employees?',
          answer: 'yes',
          solution:
            'quarterly staff re-training is advised so as to update staff with knowledge of new/developing threats.',
        },
        {
          id: 16,
          question: 'Is there routine/timely and regular System backups?',
          answer: 'yes',
          solution:
            'it is advised so as to ensure important data can quickly and easily be recovered in the event of data loss.',
        },
        {
          id: 17,
          question:
            'Is there an immediate software update once there is a release?',
          answer: 'yes',
          solution:
            'it is needed to have software with the most recent patch so as to mitigate against attacks.',
        },
        {
          id: 18,
          question:
            'Is there routine testing of the System backup so as to ensure that it is functioning properly?',
          answer: 'yes',
          solution: 'it is advised to maintain the integrity of the system.',
        },
      ],
      antiMalware: [
        {
          id: 19,
          question:
            'Do all endpoints (computers, servers, and mobile devices) in the healthcare system have anti-malware software installed?',
          answer: 'yes',
          solution:
            'it is recommended that all anti-malware software is installed.',
        },
        {
          id: 20,
          question:
            'Are there regular anti-malware software patches updated with anti-malware signatures?',
          answer: 'yes',
          solution: 'prompt software updates and patches are advised.',
        },
        {
          id: 21,
          question:
            'Do all endpoints undergo routine malware detection and mitigation scans?',
          answer: 'yes',
          solution: 'routine/quarterly scans are advised.',
        },
        {
          id: 22,
          question:
            'Is the anti-malware program ready to scan files and processes in real-time?',
          answer: 'yes',
          solution:
            'real-time scanning of files and all endpoint devices is recommended.',
        },
        {
          id: 23,
          question:
            'Does the anti-malware software undergo frequent testing to see how well it can identify and prevent malware?',
          answer: 'yes',
          solution:
            'routine/regular checks and testing should be conducted for efficient identification and prevention of malware.',
        },
        {
          id: 24,
          question:
            'Are there security protections (such as secure installation, regular updates, and digital signatures) in place to preserve the confidentiality and integrity of the anti-malware software itself?',
          answer: 'yes',
          solution:
            'it is recommended that security measures should be put in place to preserve the confidentiality and integrity of anti-malware software.',
        },
      ],
      policies: [
        {
          id: 25,
          question:
            'Is there a documented information security policy in place that addresses ransomware prevention and response?',
          answer: 'yes',
          solution:
            'Develop a comprehensive information security policy that specifically addresses ransomware, outlining preventive measures, incident response procedures, and roles and responsibilities of personnel involved.',
        },
        {
          id: 26,
          question:
            'Are employees aware of the information security policy and their responsibilities regarding ransomware prevention?',
          answer: 'yes',
          solution:
            'Conduct regular training and awareness programs to ensure that employees understand the information security policy, recognize ransomware risks, and know how to respond to potential threats.',
        },
        {
          id: 27,
          question:
            'Do you have clear procedures and guidelines for the secure configuration of systems and networks to protect against ransomware attacks?',
          answer: 'yes',
          solution:
            'Develop and enforce a configuration management policy that mandates secure configurations, regular updates and patching, and the use of robust security controls such as firewalls and intrusion detection systems (IDS).',
        },
        {
          id: 28,
          question:
            'Is there a backup and disaster recovery policy in place to mitigate the impact of a ransomware attack?',
          answer: 'yes',
          solution:
            'Establish a backup and disaster recovery policy that includes regular backups of critical data, testing the restoration process, and storing backups in an isolated and secure location to prevent them from being compromised by ransomware.',
        },
        {
          id: 29,
          question:
            'Do you have a process in place to identify and assess third-party organizations that have access to your sensitive information or systems?',
          answer: 'yes',
          solution:
            'Implement a vendor management program to identify and assess the security controls and practices of third-party organizations. This can include conducting due diligence assessments, requesting security certifications (such as ISO 27001), and regularly reviewing their security posture.',
        },
        {
          id: 30,
          question:
            'Do you assess the cybersecurity maturity of third-party organizations?',
          answer: 'yes',
          solution:
            'Conduct cybersecurity maturity assessments of third-party organizations to evaluate their security practices and capabilities. This assessment can include factors such as their incident response readiness, security awareness training, and vulnerability management processes.',
        },
        {
          id: 31,
          question:
            'Do you have a process for reviewing and updating your list of approved third-party organizations?',
          answer: 'yes',
          solution:
            "Implement a periodic review process to reassess the security posture of approved third-party organizations. This can involve conducting regular audits, reviewing security incident reports, and considering any changes in the organization's risk landscape.",
        },
      ],
      twoFactorAuthentication: [
        {
          id: 32,
          question:
            'Does your organization have a documented policy or procedure for implementing two-factor authentication?',
          answer: 'yes',
          solution:
            'Establish clear policies and procedures for the selection, deployment, and management of 2FA solutions.',
        },
        {
          id: 33,
          question:
            'Is the implementation of 2FA monitored and evaluated for effectiveness?',
          answer: 'yes',
          solution:
            'Regularly monitor and evaluate the effectiveness of 2FA controls through audits and assessments.',
        },
        {
          id: 34,
          question:
            'Are there regular audits or assessments conducted to ensure the proper functioning of 2FA controls?',
          answer: 'yes',
          solution:
            'Regularly monitor and evaluate the effectiveness of 2FA controls through audits and assessments.',
        },
        {
          id: 35,
          question:
            'Is the use of 2FA enforced for remote access, privileged accounts, and other critical systems or applications?',
          answer: 'yes',
          solution:
            'Enforce the use of 2FA for remote access, privileged accounts, and other high-risk areas.',
        },
        {
          id: 36,
          question:
            'Are there user awareness and training provided regarding the use of 2FA and its importance in mitigating ransomware attacks?',
          answer: 'yes',
          solution:
            'Provide regular user training and awareness programs to educate employees about the importance of 2FA and its role in preventing ransomware attacks.',
        },
      ],
    };

    this.score = [];
  }

  getFirewallImplementationQuestion(id: number) {
    return this.questions.firewallImplementation.find(
      (question) => question.id == id
    );
  }

  getEncryptionQuestion(id: number) {
    return this.questions.encryption.find((question) => question.id == id);
  }

  getEmployeeTrainingQuestion(id: number) {
    return this.questions.employeeTraining.find(
      (question) => question.id == id
    );
  }

  getAntiMalwareQuestion(id: number) {
    return this.questions.antiMalware.find((question) => question.id == id);
  }

  getPolicyQuestion(id: number) {
    return this.questions.policies.find((question) => question.id == id);
  }

  getTwoFactorAuthenticationQuestion(id: number) {
    return this.questions.twoFactorAuthentication.find(
      (question) => question.id == id
    );
  }

  updateAnswer(questionId: number, answer: string) {
    // check if question is already in score array
    const index = this.score.findIndex(
      (question) => question.questionId == questionId
    );

    // if question is already in score array, update answer
    if (index != -1) {
      this.score[index].answer = answer;
      return;
    }

    // if question is not in score array, add question and answer
    this.score.push({ questionId, answer });
    console.log(this.score);
    console.log(this.calculateRiskPercentage());
  }

  calculateRiskPercentage(): number {
    let score = 0;

    this.score.forEach((question) => {
      if (question.answer == 'no') {
        score += 1;
      }
    });

    const riskPercentage = (score / this.score.length) * 100;

    this.riskPercentage = riskPercentage;

    return riskPercentage;
  }

  getRiskPercentage(): number {
    return this.riskPercentage;
  }

  getSolutions() {
    let solutions: any = [];

    this.score.forEach((question) => {
      if (question.answer == 'no') {
        solutions.push(this.getSolution(question.questionId));
      }
    });

    return solutions;
  }

  getSolution(questionId: number) {
    const firewallImplementationQuestion =
      this.getFirewallImplementationQuestion(questionId);

    if (firewallImplementationQuestion) {
      return {
        solution: firewallImplementationQuestion.solution,
        question: firewallImplementationQuestion.question,
      };
    }

    const encryptionQuestion = this.getEncryptionQuestion(questionId);

    if (encryptionQuestion) {
      return {
        solution: encryptionQuestion.solution,
        question: encryptionQuestion.question,
      };
    }

    const employeeTrainingQuestion =
      this.getEmployeeTrainingQuestion(questionId);

    if (employeeTrainingQuestion) {
      return {
        solution: employeeTrainingQuestion.solution,
        question: employeeTrainingQuestion.question,
      };
    }

    const antiMalwareQuestion = this.getAntiMalwareQuestion(questionId);

    if (antiMalwareQuestion) {
      return {
        solution: antiMalwareQuestion.solution,
        question: antiMalwareQuestion.question,
      };
    }

    const policyQuestion = this.getPolicyQuestion(questionId);

    if (policyQuestion) {
      return {
        solution: policyQuestion.solution,
        question: policyQuestion.question,
      };
    }

    const twoFactorAuthenticationQuestion =
      this.getTwoFactorAuthenticationQuestion(questionId);

    if (twoFactorAuthenticationQuestion) {
      return {
        solution: twoFactorAuthenticationQuestion.solution,
        question: twoFactorAuthenticationQuestion.question,
      };
    }

    return 'No solution found';
  }
}
