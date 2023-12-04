import { Component } from '@angular/core';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/interfaces/Proyecto';
import { Tecnologia } from 'src/app/interfaces/Tecnologia';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { TecnologiaService } from 'src/app/services/tecnologia.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent {
  id: number = 0
  proyecto: Proyecto | undefined = undefined
  imagenUrl: string = ''
  editarFoto: boolean = false
  form: FormGroup
  tecnologias: Tecnologia[] = []
  tecnologiasSelected: Tecnologia[] = []

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private proyectoService: ProyectoService,
    private tecnologiaService: TecnologiaService,
    private router: Router,
    private storage: Storage
  ) {
    route.params.subscribe(params => {
      this.id = params['id'];
      this.filtrar(this.id)
    })
    this.form = formBuilder.group({
      id: [this.id],
      nombreProyecto: ['', Validators.required],
      descripcion: [''],
      link: [''],
      github: [''],
      imagen: [''],
      fecha: [''],
      tecnologias: [[]]
    })
  }

  filtrar(id: number){
    this.proyectoService.getProyectos().subscribe((resp: any) => {
      let proyectos: Proyecto[] = resp

      this.proyecto = proyectos.find(p => p.id == id)

      this.tecnologiaService.getTecnologias().subscribe((tecnologias: any) => {
        this.tecnologias = tecnologias
        
        this.proyecto?.tecnologias?.forEach((tp: any) => {
          tecnologias.forEach((t: any) => {
            if(t.id == tp.id){
              this.tecnologiasSelected.push(t)
            }
          })
        })
      })


      this.actualizarForm()
    })
  }

  actualizarForm(){
    if(this.proyecto){
      this.form.patchValue({
        nombreProyecto: this.proyecto.nombreProyecto,
        descripcion: this.proyecto.descripcion,
        link: this.proyecto.link,
        github: this.proyecto.github,
        imagen: this.proyecto.imagen,
        fecha: this.proyecto.fecha
      })
    }
  }

  getImage(event: any){
    this.editarFoto = true
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

  editarProyecto(event: Event) {
    event.preventDefault()

    this.form.get('tecnologias')?.setValue(this.tecnologiasSelected)

    console.log(this.form.value)

    if(this.form.valid){
      if(this.imagenUrl != '' && this.editarFoto){
        this.form.patchValue({
          imagen: this.imagenUrl
        })
        this.proyectoService.editProyecto(this.form.get('id')?.value, this.form.value).subscribe((resp: any) => {
          if(resp){
            alert("Se editó correctamente")
            console.log(resp)
            this.router.navigate(['/admin/panel/proyectos'])
            .then(() => window.location.reload())
          } else {
            alert("Hubo algún error")
          }
        })
      } else if(!this.editarFoto){
        this.proyectoService.editProyecto(this.form.get('id')?.value, this.form.value).subscribe((resp: any) => {
          if(resp){
            alert("Se editó correctamente")
            console.log(this.form.value)
            console.log(resp)
            // this.router.navigate(['/admin/panel/proyectos'])
            // .then(() => window.location.reload())
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
