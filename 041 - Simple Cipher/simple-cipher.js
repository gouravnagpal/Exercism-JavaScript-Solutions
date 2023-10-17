export class Cipher {
	static alphaOptions = "abcdefghijklmnopqrstuvwxyz";
	static alphaSum(a, b) {
		const indexOfA = Cipher.alphaOptions.indexOf(a);
		const indexOfB = Cipher.alphaOptions.indexOf(b);
		if ( indexOfA < 0 || indexOfB < 0) return 'a';
		return Cipher.alphaOptions[(indexOfA + indexOfB) % 26];
	}
	static alphaSub(a, b) {
		const indexOfA = Cipher.alphaOptions.indexOf(a);
		const indexOfB = Cipher.alphaOptions.indexOf(b);
		if ( indexOfA < 0 || indexOfB < 0) return 'a';
		return Cipher.alphaOptions[((indexOfA - indexOfB) % 26 + 26) % 26];
	}
	static getKeyBit(key, position) {
		return key[position % key.length];
	}

	constructor(key) {
		let selfGenKey = "";
		if (key) {
			selfGenKey = key;
		} else {
			for (let i = 0; i < 100; i++) {
				selfGenKey += Cipher.alphaOptions[Math.floor(Math.random() * 26)];
			}
		}
		this.theKey = selfGenKey;
	}

	get key() {
		return this.theKey;
	}

	encode(text) {
		return text.split("").map(
			(item, index) => Cipher.alphaSum(item, Cipher.getKeyBit(this.theKey, index))
		).join("");
	}

	decode(text) {
		return text.split("").map(
			(item, index) => Cipher.alphaSub(item, Cipher.getKeyBit(this.theKey, index))
		).join("");
	}
}