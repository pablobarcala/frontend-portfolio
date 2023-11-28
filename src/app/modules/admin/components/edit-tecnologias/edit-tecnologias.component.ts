import { Component } from '@angular/core';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnologia } from 'src/app/interfaces/Tecnologia';
import { TecnologiaService } from 'src/app/services/tecnologia.service';

@Component({
  selector: 'app-edit-tecnologias',
  templateUrl: './edit-tecnologias.component.html',
  styleUrls: ['./edit-tecnologias.component.css']
})
export class EditTecnologiasComponent {
  id: number = 0
  form: FormGroup
  tecnologia: Tecnologia | undefined = undefined
  editarFoto: boolean = false
  imagenUrl: string = ""

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private tecnologiaService: TecnologiaService,
    private router: Router,
    private storage: Storage
  ){
    route.params.subscribe(params => {
      this.id = params['id'];
      this.filtrar(this.id)
    })
    this.form = formBuilder.group({
      id: [this.id],
      nombreTecnologia: ['', Validators.required],
      porcentaje: [0, Validators.required],
      imagen: ['']
    })
  }

  filtrar(id: number){
    this.tecnologiaService.getTecnologias().subscribe((resp: any) => {
      let tecnologias: Tecnologia[] = resp

      this.tecnologia = tecnologias.find(t => t.id == id)
      this.actualizarForm()
    })
  }

  actualizarForm(){
    if(this.tecnologia){
      this.form.patchValue({
        nombreTecnologia: this.tecnologia.nombreTecnologia,
        porcentaje: this.tecnologia.porcentaje,
        imagen: this.tecnologia.imagen
      })
    }
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

  editarTecnologia(event: Event) {
    event.preventDefault()

    if(this.form.valid){
      if(this.imagenUrl != '' && this.editarFoto){
        this.form.patchValue({
          imagen: this.imagenUrl
        })
        this.tecnologiaService.editTecnologia(this.form.get('id')?.value, this.form.value).subscribe((resp: any) => {
          if(resp){
            alert("Se editó correctamente")
            this.router.navigate(['/admin/panel/tecnologias'])
            .then(() => window.location.reload())
          } else {
            alert("Hubo algún error")
          }
        })
      } else if(!this.editarFoto){
        this.tecnologiaService.editTecnologia(this.form.get('id')?.value, this.form.value).subscribe((resp: any) => {
          if(resp){
            alert("Se editó correctamente")
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
