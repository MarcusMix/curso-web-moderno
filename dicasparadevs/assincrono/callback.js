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

const getUserVideos = (email, callback) => {
    setTimeout(() => {
        callback(['video1', 'video2', 'video3']);
    }, 2000);
}

const getVideoDetails = (video, callback) => {
    setTimeout(() => {
        callback({title: "titulo do vídeo"});
    }, 2500);
}

const user = loginUser('marcus.sandi@gmail.com', '123456', (user) => {
    getUserVideos(user.email, (videos) => {
        console.log({videos});
        getVideoDetails(video[0], (videoDetails) => {
            console.log({videoDetails});
        })
    });
}, (error) => {
    console.log({error});
});

// console.log({user});
