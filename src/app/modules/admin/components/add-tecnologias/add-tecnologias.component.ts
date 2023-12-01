import { Component } from '@angular/core';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TecnologiaService } from 'src/app/services/tecnologia.service';

@Component({
  selector: 'app-add-tecnologias',
  templateUrl: './add-tecnologias.component.html',
  styleUrls: ['./add-tecnologias.component.css']
})
export class AddTecnologiasComponent {
  form: FormGroup
  editarFoto: boolean = false
  imagenUrl: string = ""

  constructor(
    private formBuilder: FormBuilder,
    private tecnologiaService: TecnologiaService,
    private router: Router,
    private storage: Storage
  ) {
    this.form = formBuilder.group({
      nombreTecnologia: ['', Validators.required],
      porcentaje: [0, Validators.required],
      imagen: ['']
    })
  }

  getImage(event: any){
    this.editarFoto = true
    const file = event.target.files[0]

    const imgRef = ref(this.storage, `tecnologias/${file.name}`)

    uploadBytes(imgRef, file)
    .then(async () => {
      this.imagenUrl = await getDownloadURL(imgRef)
      alert("Imagen guardada")
    })
  }

  addTecnologia(event: Event) {
    event.preventDefault()

    if(this.form.valid){
      if(this.imagenUrl != '' && this.editarFoto){
        this.form.patchValue({
          imagen: this.imagenUrl
        })
        this.tecnologiaService.addTecnologia(this.form.value).subscribe((resp: any) => {
          if(resp){
            alert("Se creó correctamente")
            this.router.navigate(['/admin/panel/tecnologias'])
            .then(() => window.location.reload())
          } else {
            alert("Hubo algún error")
          }
        })
      } else if(!this.editarFoto){
        this.tecnologiaService.addTecnologia(this.form.value).subscribe((resp: any) => {
          if(resp){
            alert("Se creó correctamente")
            this.router.navigate(['/admin/panel/tecnologias'])
            .then(() => window.location.reload())
          } else {
            alert("Hubo algún error")
          }
        })
      } else {
        alert("Espere")
      }
    } else {
      this.form.markAllAsTouched()
    }
  }
} 
