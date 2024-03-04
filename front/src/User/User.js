export class User {
    Email = '';

    constructor(initializer = {}) {
        if (initializer.Email) this.Email = initializer.Email;
    }

    get isNew() {
        return this.Id === undefined;
    }
}
