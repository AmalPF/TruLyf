import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Policy } from 'src/app/models/policy';
import { Policytype } from 'src/app/models/policytype';
import { ClientService } from 'src/app/services/Client/client.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class CPoliciesComponent implements OnInit {
  policies: Policy[] = [];
  types: Policytype[] = [];
  companies: Company[] = [];

  constructor(private clientservices: ClientService) { }

  ngOnInit(): void {
    this.policies = [];
    this.types = [];
    this.companies = [];
    this.clientservices.GetPolicies(0, 0, 0).subscribe(res => {
      res.forEach(p => {
        if (p.status == 1) {
          this.policies.push(p);
        }
      });
    });
    this.clientservices.GetType().subscribe(res => {
      this.types = res;
    });
    this.clientservices.GetCompanies().subscribe(res => {
      this.companies = res;
    });
  }

  ReadTypeName(typeId: number): String {
    let r = this.types.find(t => t.policytypeId == typeId);
    if (r != null) {
      return r.policytypeName;
    }
    else return "";
  }

  ReadCompanyName(cid: number): String {
    let r = this.companies.find(c => c.companyId == cid);
    if (r != null) {
      return r.companyName;
    }
    else return "";
  }
}
