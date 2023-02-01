export class GenericForm {
    public title: string;
    public fields: string[];
    constructor(t: string, f: any[]){ //how to do this without any
        this.title = t;
        this.fields = f;
    }
}