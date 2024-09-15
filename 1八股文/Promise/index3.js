let a = new Promise((resolve,reject)=>{
  resolve('111')
})

a.then(console.log('111'))
.catch(console.log('catch'))
.then(console.log('222'))
.then(console.log('333'))

console.log('-----');

a.then((resolve,reject)=>{console.log('succeed 1')
// return reject('2')},()=>{console.log('error 1')
throw new Error('123')
}
)
// .catch(()=>{console.log('catch ...')})
.then(()=>{console.log('succeed 2')},()=>{console.log('error 2')})
.then(()=>{console.log('succeed 3')},()=>{console.log('error 3')})