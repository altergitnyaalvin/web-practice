console.log('Pertama')
setTimeout(() => console.log('Kedua'), 1000)
setTimeout(() => console.log('Ketiga'), 2000)

const data = new Promise((resolve, reject) => {
    try{
        // berhasil
        const data = 'dataaa'
        resolve(data)
    }
    catch(e){
        // gagal
        console.log(e)
        reject(new Error(e))
    }
})

data
    .then((res) => { 
        console.log(res) 
    })
    .catch((err) => { 
        console.log(err) 
    })
    .finally('success')


console.log('Keempat')



function getNumber(){
    try{
        console.log(angka)
    }
    catch(err) {
        console.log(err)
    }
}

getNumber()