// การสร้างตัวแปรง
let fname:string = "passapol"
let age:number = 19
let pass:boolean = false
let all:any; // ชนิดข้อมูลแบบใดก็ได้ ไม่แนะนำ อาจโดนฝังบอท
let allt:unknown; // ใช้แทน any จะดีกว่า any เพราะจะตรวจสอบข้อมูลก่อน






// การรับข้อมูลในฟังชันและเอาแค่ทศนิยม 2 ตำแหน่าง
function formatNumber(num:number){
    // function formatNumber(num:any){ ทำงานได้สบาย
    return num.toFixed(2);
}
let money:unknown="50.1213"
money = 50.3213
if(typeof money == "number"){
    console.log(formatNumber(money))
}







// การบอกชนิดข้อมูลด้วย as,<>
let user:unknown;
user="passapol";
// (user as string).toUpperCase()
(<String>user).toUpperCase()








// if else
let number:number = 5;
let result:string;
if (number%2===0){
    result = "odd"
}else{
    result = "even"
}
result = (number%2==0) ? "odd" : "even"









// การสร้าวฟังชัน
function sayHi():string{
    return "Hi"
}
function five():number{
    return 500
}
const re = ()=>{return true}
const cal = (a:number,b:number)=>{return a+b}
console.log(sayHi)

function employee(name:string, age:number,address:string="กาฬสินธู์"){
    console.log(`ชื่อ ${name} อายุ${age} ที่อยู่ ${address}`)
}
// ฟังชันแบบ obj
function showDatail(data:{name:string,age:number}){
    console.log(data.name)
}
// เช็คในการใส่ข้อมูล ถ้าข้อมูลเกินมันจะแจ้งเตือน
// showDatail({name:"phol",age:20,address:"KLS"})

const random=():{x:number,y:number}=>{
    return{
        x:Math.random(),
        y:Math.random()
    }
}
// function Overloading  ฟังชันก์ที่ซ้ำกันได้
function sayHi2():string
function sayHi2(name:string):string
function sayHi2(name?:unknown):unknown{
    if(!name){return `hello ${name}`}
    if(typeof name == "string"){return `hello ${name}`}
    throw new Error("ชนิดข้อมูลไม่ถูกต้อง")
}

function total2(a:number, b:number):number //ตรง ():number ด้านหลังคือ type ในการ return
function total2(a:string, b:string):string
function total2(a:unknown, b:unknown):unknown{
    if(typeof a=="number" && typeof b=="string"){
        return a+b
    }
    if(typeof a=="string" && typeof b=="string"){
        return parseInt(a) + parseInt(b)
    }
    throw new Error("ชนิดข้อมูลไม่ถูกต้อง")
}
// ฟังชันก์รับค่ามไ่จำกัด
const total3 = (...numbers:number[])=>{
    return numbers.reduce((result,value)=>{
        return result + value
    },0) // reduce การเข้าถึงสมาชิกแต่ละตัวใน list แล้ว บวกกันโดยเริ้มจาก 0 ไปเก็บไว้ใน value
}






// การสร้าง object
const parson:{name:string,age:number}={name:"phol",age:30}





// type  copy
type employee={
    readonly id:number, // ห้ามเปลี่ยนแปลง
    name:string,
    salary:number,
    phone?:string // ระบุก็ได้ไม่ระบุก็ได้
}
let emp1:employee={id:1,name:"phol",salary:15000,phone:"099999999"}
let emp2:employee={id:1,name:"phol1",salary:15000}
// emp1.id = 0






// List 
const username:string[]=[] //กำหนดชนิดของข้อมูล ใส่ได้แค่ str
username.push("phol")
// การกระจายแบบ  Destructuring การสลายโครงสร้าง
const numberx = [1,2,3]
const [one,two,three] = numberx
// const personX={fname:"p",age:50,address:"KLS"}
// const {fname2,age2,address2} = personX

type Employee1 = {
    name:string,
    salary:number,
    department:string
}
const employees1:Employee1[]=[]
employees1.push({name:"pol",salary:10000,department:"programmer"})
employees1.push({name:"saf",salary:12000,department:"AD"})

for(let person of employees1){
    console.log(person)
}

// อาร์เรย์ + อาร์เรย์
const section:string[] = ["A","B"]
const section2:string[] = ["C","D","E"]
section.push(...section2)



// tuple
const Data:[number,string,boolean] = [10,"phol",true]
// tuple Label
const point:[status:string,code:number] = ["success",200]
type HttpStatus = [number,string] //สร้าง type ใหม่
const point2:HttpStatus = ["success",200]