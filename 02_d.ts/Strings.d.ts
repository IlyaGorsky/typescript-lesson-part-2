declare module 'redux' {

    export default Strings;
    /**
     * Word case dictionary with singular, paucal and plural forms of the word
     * i.e. ['день', 'дня', 'дней']
     */
    export type CaseDict = [string, string, string];
    /**
     * Word case dictionary with singular, paucal and plural forms of the word
     * i.e. ['день', 'дня', 'дней']
     * @typedef {[string, string, string]} CaseDict
     * @property {String} 0 - singular form, one
     * @property {String} 1 - paucal form, some
     * @property {String} 2 - plural form, many
     */
    /**
     * Утилита по работе со строками
     * @type {Object}
     * @exports Utils/Strings
     */
    declare const Strings: {
        pluralize(count: number, cases: CaseDict): string;
    };
}
