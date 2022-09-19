class Aviao{
    public modelo : string
    public motor : string
    public ano : number

}const aviao = new Aviao()

aviao.modelo = 'atr72'
aviao.motor = 'PW100'
aviao.ano = 1986

console.log(`Modelo : ${aviao.modelo}`);
console.log(`motor: ${aviao.motor}`);
console.log(`ano: ${aviao.ano}`);