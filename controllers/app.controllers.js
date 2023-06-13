// Controladores que responden a una petición con un mensaje sobre el
// el método HTTP utilizado

// Como son controladores simples, se conservan en un archivo;
// de existir otros endpoints diferentes, habría que separarlos en otros, dentro
// del directorio controllers
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