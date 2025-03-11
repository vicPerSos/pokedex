export interface Data{
    count:Number;
    next: String;
    previous: String;
    results: Resultado[];
}

export interface Resultado{
    name:String;
    url:String;
}