const o = new Object();
o.firstName = "Adilkhan";
o.lastName = "Zarubay";
o.isStudying = true;
o.greet = function() {
	console.log('hi');
}

const o2 = {};
o2.firstName = "Adilkhan";
o2['lastName'] = "Zarubay";
const key = 'isTeaching';
o2[key] = true;
o2['greet'] = function() {
	console.log('hi');
}

const o3 = {
	firstName: 'Jordan',
	lastName: 'Hayashi',
	isTeaching: true,
	greet: function() {
		console.log('hi');
	},
	address: {
		street: 'Main St.',
		number: 123,
	},
}
