
const history = [];

const superAnyLib = {
    push(...args) {
        history.push(args);
    },
    get() {
        return history;
    }
}


export default superAnyLib;