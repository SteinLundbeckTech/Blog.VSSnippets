var _pauseTimer;

const search = () => {
    clearTimeout(_pauseTimer);

    _pauseTimer = setTimeout(() => {
        let val = document.getElementById("txtSearch").value;

        // do
        // your
        // work
    }, 800);
};

document.getElementById("txtSearch").addEventListener("keyup", search);