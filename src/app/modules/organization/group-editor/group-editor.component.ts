import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { Group } from 'src/app/interfaces/groups-interfaces';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-group-editor',
  templateUrl: './group-editor.component.html',
  styleUrls: ['./group-editor.component.sass']
})
export class GroupEditorComponent implements OnInit {
  
  // groupName = '';
  
  hoverColumn = -1;
  hoverRow = -1;

  form = this.fb.group({
    groupName: this.fb.control('', [Validators.required, Validators.minLength(3)], []),
    titles: this.fb.array([this.createEmptyControl()]),
    members: this.fb.array([])
    })
    
  constructor(
    private fb: FormBuilder,
    private groupsService: GroupsService,
    private socket: Socket,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.socket.emit('getAllGroups');
  }

  get titles(): FormArray {
    return this.form.get('titles') as FormArray
  }

  get members(): FormArray {
    return this.form.get('members') as FormArray
  }

  get groupName(): FormControl {
    return this.form.get('groupName') as FormControl
  }

  getMember(i: number): FormArray {
    return this.members.controls[i] as FormArray;
  }

  getMemberValue(i: number, j: number): FormControl {
    return this.getMember(i).controls[j] as FormControl
  }

  private createEmptyArray(): FormArray {
    return this.fb.array([], [], []);
  }

  private createEmptyControl(): FormControl {
    return this.fb.control('', [Validators.required], []);
  }

  private addMemberValue(i: number): void {
    const memberValues = this.members.controls[i] as FormArray
    memberValues.push(this.createEmptyControl());
  }

  addMember(): void {
    this.members.push(this.createEmptyArray());
    const titlesLength = this.titles.length;
    const memberLength = this.members.length;
    const member = this.members.controls[memberLength -1 ] as FormArray;
    
    for (let i = 0; i < titlesLength; i++) {
      member.push(this.createEmptyControl());
    }
  }

  removeMember(i: number): void {
    this.members.removeAt(i);
  }

  addColumn(): void {
    this.titles.push(this.createEmptyControl());
    for (let i = 0; i < this.members.controls.length; i++) {
      const element = this.members.controls[i];
      this.addMemberValue(i);
    }
  }

  removeColumn(i: number): void {
    this.titles.removeAt(i)
    this.members.controls.forEach( memberValues => {
      const memberValuesArray = memberValues as FormArray
      memberValuesArray.removeAt(i)
    });
  }

  saveForm() {
    const group: Group = this.form.value
    this.groupsService.createNewGroup(group);
    this.navigateBack();
  }

  navigateBack() {
    this.router.navigate(['./..'], {relativeTo: this.route})
  }

  setMouseHoverRow(value: number): void {
    this.hoverRow = value
  }
  setMouseHoverColumn(value: number): void {
    this.hoverColumn = value
  }

}
