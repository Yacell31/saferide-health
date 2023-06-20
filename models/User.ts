export default class User {
	id?: number;
	username: string;
	password?: string;

	constructor(username: string, id?: number, password?: string) {
		this.id = id;
		this.username = username;
		this.password = password;
	}
}
