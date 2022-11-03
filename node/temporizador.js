const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 2', function (){ // */5 = vai executar em 5 em 5 segundos, executadno 12 horas, ignorando o dia do mês, ignorando o mês, executando na terça feira (2)..
    console.log('Executando Tarefa 1:', new Date().getSeconds()) //mostra os segundos// */5 = vai executar em 5 em 5 segundos, executadno 12 horas, ignorando o dia do mês, ignorando o mês, executando na terça feira (2)..
}) 

setTimeout(function (){
    tareda1.cancel()
    console.log('Cancelando Tarefa 1')
}, 20000) //vai executar o cancelamento da tarefa depois de 20 segundos..

const regra = new schedule.RecurrenceRule() //Regra de recorrência
regra.dayOfWeek = [new schedule.Range(1, 5)] // Vai executar de segunda sexta feira
regra.hour = 12 // regra hora
regra.second = 30 //sempre que o segundo der 30 ele vai executar essa regra

const regra2 = schedule.scheduleJob(regra, function (){
    console.log('Executando tarefa 2!', new Date().getSeconds())
})