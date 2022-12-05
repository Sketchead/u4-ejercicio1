"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3912],{3912:(M,s,l)=>{l.r(s),l.d(s,{EditStudentPageModule:()=>Z});var m=l(9808),n=l(4182),i=l(4153),g=l(4740),e=l(5e3),p=l(1881);const c=[{path:"",component:(()=>{class t{constructor(u,o,d,r){this.ar=u,this.fs=o,this.fb=d,this.router=r,this.student={controlnumber:"",name:"",curp:"",age:0,nip:0,email:"",career:"",photo:"",id:""},this.myForm=this.fb.group({controlnumber:["",n.kI.compose([n.kI.minLength(8),n.kI.required,n.kI.pattern("^[0-9]+$")])],name:["",n.kI.required],curp:["",n.kI.compose([n.kI.required,n.kI.pattern("^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$")])],age:[,n.kI.compose([n.kI.required,n.kI.min(17)])],nip:[,n.kI.compose([n.kI.required,n.kI.min(10)])],email:["",n.kI.compose([n.kI.required,n.kI.email])],career:["",n.kI.required],photo:["",n.kI.compose([n.kI.required])]})}ngOnInit(){this.ar.queryParams.subscribe(u=>{this.stID=u.id,this.fs.getStudentById(u.id).subscribe(o=>{this.student=o})})}updateStudent(){this.student={controlnumber:this.myForm.controls.controlnumber.value,name:this.myForm.controls.name.value,curp:this.myForm.controls.curp.value,age:this.myForm.controls.age.value,nip:this.myForm.controls.nip.value,email:this.myForm.controls.email.value,career:this.myForm.controls.career.value,photo:this.myForm.controls.photo.value,id:this.stID},console.log(this.fs.updateStudent(this.student)),this.router.navigate([".."])}}return t.\u0275fac=function(u){return new(u||t)(e.Y36(g.gz),e.Y36(p.V),e.Y36(n.qu),e.Y36(g.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-edit-student"]],decls:76,vars:10,consts:[["padding",""],[3,"formGroup"],["position","floating"],["formControlName","controlnumber",3,"ngModel","ngModelChange"],["formControlName","name",3,"ngModel","ngModelChange"],["formControlName","curp",3,"ngModel","ngModelChange"],["formControlName","age","type","number",3,"ngModel","ngModelChange"],["formControlName","nip","type","number",3,"ngModel","ngModelChange"],["position","floating","type","email"],["formControlName","email",3,"ngModel","ngModelChange"],["interface","popover","formControlName","career",3,"ngModel","ngModelChange"],["value","ISC"],["value","IC"],["value","ARQ"],["position","floating","type","url"],["formControlName","photo",3,"ngModel","ngModelChange"],["size","12"],["color","success","expand","block","shape","round",3,"disabled","click"],["name","checkmark-outline"],[1,"txtWhite"]],template:function(u,o){1&u&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"edit-student"),e.qZA()()(),e.TgZ(4,"ion-content",0)(5,"ion-grid")(6,"form",1)(7,"ion-row")(8,"ion-col")(9,"ion-item")(10,"ion-label",2),e._uU(11,"N\xfamero de control"),e.qZA(),e.TgZ(12,"ion-input",3),e.NdJ("ngModelChange",function(r){return o.student.controlnumber=r}),e.qZA()(),e._UZ(13,"div"),e.qZA()(),e.TgZ(14,"ion-row")(15,"ion-col")(16,"ion-item")(17,"ion-label",2),e._uU(18,"Nombre"),e.qZA(),e.TgZ(19,"ion-input",4),e.NdJ("ngModelChange",function(r){return o.student.name=r}),e.qZA()(),e._UZ(20,"div"),e.qZA()(),e.TgZ(21,"ion-row")(22,"ion-col")(23,"ion-item")(24,"ion-label",2),e._uU(25,"CURP"),e.qZA(),e.TgZ(26,"ion-input",5),e.NdJ("ngModelChange",function(r){return o.student.curp=r}),e.qZA()(),e._UZ(27,"div"),e.qZA()(),e.TgZ(28,"ion-row")(29,"ion-col")(30,"ion-item")(31,"ion-label",2),e._uU(32,"Edad"),e.qZA(),e.TgZ(33,"ion-input",6),e.NdJ("ngModelChange",function(r){return o.student.age=r}),e.qZA()(),e._UZ(34,"div"),e.qZA()(),e.TgZ(35,"ion-row")(36,"ion-col")(37,"ion-item")(38,"ion-label",2),e._uU(39,"NIP"),e.qZA(),e.TgZ(40,"ion-input",7),e.NdJ("ngModelChange",function(r){return o.student.nip=r}),e.qZA()(),e._UZ(41,"div"),e.qZA()(),e.TgZ(42,"ion-row")(43,"ion-col")(44,"ion-item")(45,"ion-label",8),e._uU(46,"Email"),e.qZA(),e.TgZ(47,"ion-input",9),e.NdJ("ngModelChange",function(r){return o.student.email=r}),e.qZA()(),e._UZ(48,"div"),e.qZA()(),e.TgZ(49,"ion-row")(50,"ion-col")(51,"ion-item")(52,"ion-label",2),e._uU(53,"Carrera"),e.qZA(),e.TgZ(54,"ion-select",10),e.NdJ("ngModelChange",function(r){return o.student.career=r}),e.TgZ(55,"ion-select-option",11),e._uU(56,"Sistemas"),e.qZA(),e.TgZ(57,"ion-select-option",12),e._uU(58,"Civil"),e.qZA(),e.TgZ(59,"ion-select-option",13),e._uU(60,"Arquitectura"),e.qZA()()(),e._UZ(61,"div"),e.qZA()(),e.TgZ(62,"ion-row")(63,"ion-col")(64,"ion-item")(65,"ion-label",14),e._uU(66,"Foto"),e.qZA(),e.TgZ(67,"ion-input",15),e.NdJ("ngModelChange",function(r){return o.student.photo=r}),e.qZA()(),e._UZ(68,"div"),e.qZA()(),e.TgZ(69,"ion-row")(70,"ion-col",16)(71,"ion-button",17),e.NdJ("click",function(){return o.updateStudent()}),e._UZ(72,"ion-icon",18),e._uU(73,"\xa0 "),e.TgZ(74,"ion-label",19),e._uU(75,"Guardar"),e.qZA()()()()()()()),2&u&&(e.xp6(6),e.Q6J("formGroup",o.myForm),e.xp6(6),e.Q6J("ngModel",o.student.controlnumber),e.xp6(7),e.Q6J("ngModel",o.student.name),e.xp6(7),e.Q6J("ngModel",o.student.curp),e.xp6(7),e.Q6J("ngModel",o.student.age),e.xp6(7),e.Q6J("ngModel",o.student.nip),e.xp6(7),e.Q6J("ngModel",o.student.email),e.xp6(7),e.Q6J("ngModel",o.student.career),e.xp6(13),e.Q6J("ngModel",o.student.photo),e.xp6(4),e.Q6J("disabled",!o.myForm.valid))},dependencies:[n._Y,n.JJ,n.JL,n.sg,n.u,i.YG,i.wI,i.W2,i.jY,i.Gu,i.gu,i.pK,i.Ie,i.Q$,i.Nd,i.t9,i.n0,i.wd,i.sr,i.as,i.QI,i.j9]}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(u){return new(u||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[g.Bz.forChild(c),g.Bz]}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(u){return new(u||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.ez,n.u5,n.UX,i.Pc,h]}),t})()}}]);