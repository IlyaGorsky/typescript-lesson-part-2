/**
 * @name Never
 * @despcription служит для указания того, что какие-либо операции никогда не будут выполнены.
 * Тип never можно указать только той функции, из которой программа действительно никогда не сможет выйти.
 */
const throwAppError = (message: string) => {
    throw new Error(`[APP]: ${message}`);
};

const errorBadRequest = () => throwAppError("BadRequest");

const infineLoop = () => {
    while (true) {}
};

errorBadRequest();
