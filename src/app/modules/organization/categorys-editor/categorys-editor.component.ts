import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-categorys-editor',
  templateUrl: './categorys-editor.component.html',
  styleUrls: ['./categorys-editor.component.sass']
})
export class CategorysEditorComponent implements OnInit {
  
  groupName = '';
  
  form = this.fb.group({
    groupName: this.fb.control('', [], []),
    titles: this.fb.array([]),
    members: this.fb.array([])
    })
    
    constructor(private fb: FormBuilder) { }
  
    ngOnInit(): void {
      console.log(this.titles)
    }
  
    get titles(): FormArray {
      return this.form.get('titles') as FormArray
    }

    get members(): FormArray {
      return this.form.get('members') as FormArray
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
      return this.fb.control('', [], []);
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
  
    addColumn(): void {
      this.titles.push(this.createEmptyControl());
      for (let i = 0; i < this.members.controls.length; i++) {
        const element = this.members.controls[i];
        this.addMemberValue(i);
      }
    }
  
    removeColumn(i: number): void {
    }

}
