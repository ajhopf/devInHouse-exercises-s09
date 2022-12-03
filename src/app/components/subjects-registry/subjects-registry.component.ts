import { Component, Output } from '@angular/core';
import { REGISTRY } from 'src/app/constants/subjects-registry/subjectRegistry';
import { TEACHERS } from 'src/app/constants/subjects-registry/teachers';

@Component({
  selector: 'app-subjects-registry',
  templateUrl: './subjects-registry.component.html',
  styleUrls: ['./subjects-registry.component.css']
})
export class SubjectsRegistryComponent {
  registry = REGISTRY;
  teachers = TEACHERS;
  h2 = document.querySelector('#h2');
  
}
