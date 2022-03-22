'use strict';
'use strict';
const socket = require('socket.io-client')
const host = "http://localhost:3000"
const {faker}= require('@faker-js/faker');

const capsConnection = socket.connect(host)


setInterval(() => {
         let storeName = {
        store: "my store",
        orderID: faker.datatype.uuid(),
        customer: faker.name.findName(),
        address: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
    };
    capsConnection.emit('pickup',storeName)
}, 5000);

capsConnection.on('delivered',(storeName)=>{
    console.log(`VENDOR : Thank you for delivering ${storeName.orderID}`);
})