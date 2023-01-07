function home() {
    const app = document.querySelector("#root");

    const header = document.createElement('div');
    header.textContent= "header";
    app.append(header);
};

export default home;