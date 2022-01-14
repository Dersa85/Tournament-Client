import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { Group } from 'src/app/interfaces/groups-interfaces';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-group-editor',
  templateUrl: './group-editor.component.html',
  styleUrls: ['./group-editor.component.sass']
})
export class GroupEditorComponent implements OnInit {
  
  // groupName = '';
  
  hoverColumn = -1;
  hoverRow = -1;

  isLoadingGroup = false;

  form = this.fb.group({
    groupName: this.fb.control('', [Validators.required, Validators.minLength(3)], []),
    titles: this.fb.array([this.createEmptyControl()]),
    memberValuesArrays: this.fb.array([])
    })
    
  constructor(
    private fb: FormBuilder,
    private groupService: GroupService,
    private socket: Socket,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.params.id
    if (id != undefined) {
      this.isLoadingGroup = true;
      this.socket.on(`getGroup/${id}`, (group: Group) => {
        if (this.isLoadingGroup) {
          this.loadGroupInForm(group);
          this.isLoadingGroup = false
        }
      })
    }
    
    this.socket.emit('loadGroup', id);
    // this.socket.emit('getAllGroups');
  }

  loadGroupInForm(group: Group): void {
    this.form.controls['groupName'].setValue(group.groupName);
    this.updateForEachRow(group);
  }

  updateForEachRow(group: Group): void {
    for (let r = 0; r < group.memberValuesArrays.length; r++) {  
      if (this.memberValuesArrays.length < r+1) {
        this.addMember();
      }
      this.updateForEachColum(r, group);
    }
  }

  updateForEachColum(row: number, group: Group): void {
    const groupMembers = group.memberValuesArrays[row];
    for (let c = 0; c < groupMembers.length; c++) {
      const groupTitle = group.titles[c];
      if (this.titles.length < c+1) {
        this.addColumn();
      }
      this.titles.controls[c].setValue(groupTitle);
      const formMember = this.memberValuesArrays.controls[row] as FormArray
      formMember.controls[c].setValue(groupMembers[c])
    }
  }

  get titles(): FormArray {
    return this.form.get('titles') as FormArray
  }

  get memberValuesArrays(): FormArray {
    return this.form.get('memberValuesArrays') as FormArray
  }

  get groupName(): FormControl {
    return this.form.get('groupName') as FormControl
  }

  getMember(i: number): FormArray {
    return this.memberValuesArrays.controls[i] as FormArray;
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
    const memberValues = this.memberValuesArrays.controls[i] as FormArray
    memberValues.push(this.createEmptyControl());
  }

  addMember(): void {
    this.memberValuesArrays.push(this.createEmptyArray());
    const titlesLength = this.titles.length;
    const memberLength = this.memberValuesArrays.length;
    const member = this.memberValuesArrays.controls[memberLength -1 ] as FormArray;
    
    for (let i = 0; i < titlesLength; i++) {
      member.push(this.createEmptyControl());
    }
  }

  removeMember(i: number): void {
    this.memberValuesArrays.removeAt(i);
  }

  addColumn(): void {
    this.titles.push(this.createEmptyControl());
    for (let i = 0; i < this.memberValuesArrays.controls.length; i++) {
      const element = this.memberValuesArrays.controls[i];
      this.addMemberValue(i);
    }
  }

  removeColumn(i: number): void {
    this.titles.removeAt(i)
    this.memberValuesArrays.controls.forEach( memberValues => {
      const memberValuesArray = memberValues as FormArray
      memberValuesArray.removeAt(i)
    });
  }

  saveForm() {
    const group: Group = this.form.value
    this.groupService.createNewGroup(group);
    this.navigateBack();
  }

  navigateBack() {
    const id: string = this.route.snapshot.params.id
    let navigateRelative = './..'; // if new group move once back
    
    if (id) { navigateRelative = './../..'; } // if edit move double back
    
    this.router.navigate([navigateRelative], {relativeTo: this.route})
  }

  setMouseHoverRow(value: number): void {
    this.hoverRow = value
  }
  setMouseHoverColumn(value: number): void {
    this.hoverColumn = value
  }

}
