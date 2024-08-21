import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ApiConstant } from '../../constant/ApiConstant';
import { MasterService } from '../master/master.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private master: MasterService) {}

  getProjects() {
    return this.master.get(environment.baseUrl + ApiConstant.project.get);
  }
}
