const o = {
	a: 'a',
	b: 'b',
	obj: {
		key: 'key',
	},
}

const o2 = o;
const o3 = Object.assign({}, o);
o3.obj.key = 'new value';
o.a = "new value";

console.log(o2.a);
console.log(o.obj.key);

function deepCopy(obj){
	const keys = Object.keys(obj);
	const newObject = {};
	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		if (typeof obj[key] === 'object'){
			newObject[key] = deepCopy(obj[key]);
		}else{
			newObject[key] = obj[key];
		}
	}

	return newObject;
}


const o4 = deepCopy(o);

o.obj.key = "new key";
console.log(o4.obj.key);
