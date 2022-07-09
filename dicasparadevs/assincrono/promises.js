const { reject } = require("lodash");

const loginUser = (email, password, onSucess, onError) => {
    setTimeout(() => {
        const error = true;

        if(error) {
            return onError(new Error('erro de login'));
        }

        console.log('usuário logado!');
        onSucess ({email});
    }, 1500);
};

const loginUser = (email, password) => {
    return new Promise ((resolve, reject) => {
        const error = false;

        if(error) {
            reject(new Error("erro no login!"));
        }

        console.log("usuário logado!");
        resolve({email});
    });
};

loginUserPromise("marcus@gmail.com", "1234532").then((user) => {
    console.log({user});
}).catch((error) => {
    console.log({error});
});
