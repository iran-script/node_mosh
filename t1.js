const Event = require('events');
const emitter = new Event();
emitter.on('msg', function (args) {
    console.log('emiit!', args)
});

emitter.emit('msg', {
    id: 1,
    msg: 'kkk'
})