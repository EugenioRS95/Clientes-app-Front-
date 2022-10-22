export class Cliente {
    id!: number;
    nombres!: string;
    apellidoPaterno!: string;
    apellidoMaterno!: string;
    direccion!: string;
    email!: string;
    fechaNacimiento!: Date;
    sexo!: string;

    constructor(){
        this.id=0;
        this.nombres='';
        this.apellidoPaterno='';
        this.apellidoMaterno='';
        this.direccion='';
        this.email='';
        this.fechaNacimiento=new Date();
        this.sexo='';
    }

    public setId(id: number): void {
        this.id=id;
    }

    public setNombres(nombres: string): void{
        this.nombres=nombres;
    }

    public setApellidoPaterno(apellidoPaterno: string): void {
        this.apellidoPaterno=apellidoPaterno;
    }

    public setCliente(cliente: Cliente) {
        this.id=cliente.id;
        this.nombres=cliente.nombres;
        this.apellidoPaterno=cliente.apellidoPaterno;
        this.apellidoMaterno=cliente.apellidoMaterno;
        this.direccion=cliente.direccion;
        this.email=cliente.email;
        this.fechaNacimiento=cliente.fechaNacimiento;
        this.sexo = cliente.sexo;
    }
}