const fs = require('fs');
const colors = require('colors');
const crearArchivo = async( base = 5, listar=false , hasta=5) => {

    try {
        let salida, consola = '';

        for (let i = 1; i<=hasta; i++){
            salida += (`${base} x ${i} = ${base * i} \n`); 
            consola +=(`${base} ${colors.green('x')} ${ i } = ${ colors.brightRed(base * i) } \n`);

        }
        if (listar){

            console.log('========================'.bold);
            console.log(`     TABAL DEL: ${ base }       `.bgBlue);
            console.log('========================'.bold);
            console.log(consola)
        }
        

        fs.writeFileSync(`./salida/tabladel-${base}.txt`, salida)

        return (`tabladel-${base}.txt`.green + ' creado')
    } catch (error) {
        throw error;
    }
    

}

module.exports = {
    crearArchivo
}