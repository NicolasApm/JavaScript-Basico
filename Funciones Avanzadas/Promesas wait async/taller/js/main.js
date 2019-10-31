
function prueba(){

var promise = new Promise((resolve, reject) => {
    setTimeout(function () {
        var number = parseInt(Math.random() * 10);
       // var number=3;
        if (number % 2 == 0) {
            resolve(number)
        }
        else {
            reject("Rechazado")
        }
    },
 1000)
})
return promise;
}

async function procesar() {
    try {
        var resultado=await prueba();
        console.log('res',resultado);
        
    } catch (error) {
        console.log('error: ', error);
    }
}


procesar();
procesar();
procesar();
procesar();
