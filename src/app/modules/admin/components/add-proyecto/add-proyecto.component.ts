import { Component } from '@angular/core';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tecnologia } from 'src/app/interfaces/Tecnologia';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { TecnologiaService } from 'src/app/services/tecnologia.service';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent {
  form: FormGroup;
  imagenUrl: string = ''
  cargarFoto: boolean = false
  tecnologias: Tecnologia[] = []
  tecnologiasSelected: Tecnologia[] = []

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private proyectoService: ProyectoService,
    private tecnologiaService: TecnologiaService,
    private storage: Storage
  ){
    tecnologiaService.getTecnologias().subscribe((tecnologias: any) => {
      this.tecnologias = tecnologias
    })
    this.form = formBuilder.group({
      nombreProyecto: ['', Validators.required],
      descripcion: [''],
      link: [''],
      github: [''],
      imagen: [''],
      fecha: ['']
    })
  }

  getImage(event: any){
    this.cargarFoto = true
    const file = event.target.files[0]

    const imgRef = ref(this.storage, `proyectos/${file.name}`)

    uploadBytes(imgRef, file)
    .then(async () => {
      this.imagenUrl = await getDownloadURL(imgRef)
      alert("Imagen guardada")
    })
  }

  toggleTecnologia(tecnologia: Tecnologia){
    if(this.tecnologiasSelected.includes(tecnologia)){
      this.tecnologiasSelected.splice(this.tecnologiasSelected.indexOf(tecnologia), 1)
    } else {
      this.tecnologiasSelected.push(tecnologia)
    }
  }

  addProyecto(event: Event) {
    event.preventDefault()

    if(this.form.valid){
      if(this.imagenUrl != '' && this.cargarFoto){
        this.form.patchValue({
          imagen: this.imagenUrl
        })
        this.proyectoService.addProyecto(this.form.value).subscribe((resp: any) => {
          if(resp){
            alert("Se creó correctamente")
            this.router.navigate(['/admin/panel/proyectos'])
            .then(() => window.location.reload())
          } else {
            alert("Hubo algún error")
          }
        })
      } else if(!this.cargarFoto){
        this.proyectoService.addProyecto(this.form.value).subscribe((resp: any) => {
          if(resp){
            alert("Se creó correctamente")
            this.router.navigate(['/admin/panel/proyectos'])
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
