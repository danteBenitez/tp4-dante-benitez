function getController(_req, res) {
    res.send(`Recibida petición HTTP con método GET`);
}

function postController(_req, res) {
    res.send('Recibida petición HTTP con método POST');
}

function putController(_req, res) {
    res.send('Recibida petición HTTP con método PUT');
}

function deleteController(_req, res) {{
    res.send('Recibida petición HTTP con método DELETE');
}}

module.exports = {
    getController,
    postController,
    putController,
    deleteController
}