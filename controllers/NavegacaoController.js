module.exports = function NavegacaoController() {

    function usuarios(request, response) {
        return response.render("users/index");
    }

    function sobre(request, response) {
        return response.render("sobre");
    }

    function index(request, response) {
        return response.render("index");
    }

    function notFound(request, response) {
        return response.render("404");
    }

    return {
        usuarios,
        sobre,
        index,
        notFound
    }

}

