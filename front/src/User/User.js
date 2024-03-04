export class User {
    Email = '';

    constructor(initializer = {}) {
        if (initializer.email) this.Email = initializer.email;
    }

    get isNew() {
        return this.Id === undefined;
    }
}
