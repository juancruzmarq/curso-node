
// const tabla5 = () =>{
//     let a = 5;
//     for(let i=1; 50>a ;i++){
//         a = i * 5
//         console.log(`5 x ${i} = ${a}`);
//     }
// }

// tabla5();

console.clear();

const { crearArchivo } = require('./helpers/multiplicar')

const argv = require('./config/yargs');
// console.log(process.argv);

// const [,,arg3 = '--base=5'] = process.argv;
// const [, base = 5 ] = arg3.split('=');
// console.log(base);

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreARchivo => console.log(nombreARchivo))
    .catch( err => console.log(err));

// console.log(process.argv);
// console.log( argv);

// console.log('base: yargs', argv.base);