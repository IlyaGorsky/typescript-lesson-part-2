{
    const app = document.getElementById('app');

    app.innerHTML = 'Hello, World!';
    
    if (app) {
        app.innerHTML = 'Hello, World!';
    }
}


{
    /**
     * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-
     */
    const app = document.getElementById('app')!;

    app.innerHTML = 'Hello, World!';
    // if (app) {
    //     app.innerHTML = 'Hello, World!';
    // }
}


