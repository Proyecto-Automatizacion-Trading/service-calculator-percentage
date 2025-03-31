/**
 * @author Daniel Condía Figueredo
 * @description Clase encargada de manejar las respuestas genéricas de la API
 */
class ResponseDto {
    constructor({valid = true, message = '', statusCode = 200, data = null}) {
        this.valid = valid;
        this.message = message;
        this.statusCode = statusCode;
        this.data = data
    }

    /**
     * Método encargado de crear una respuesta exitosa
     * @param message mensaje de la respuesta exitosa
     * @param data datos de la respuesta
     * @param statusCode código de la respuesta
     * @returns {ResponseDto} nueva instancia de la respuesta
     */
    static success(message, data = null, statusCode = 200) {
        return new ResponseDto({valid: true, message, statusCode, data});
    }

    /**
     * Método encargado de crear una respuesta de error
     * @param message mensaje de la respuesta de error
     * @param statusCode código de la respuesta
     * @returns {ResponseDto} nueva instancia de la respuesta de error
     */
    static error(message, statusCode = 400) {
        return new ResponseDto({valid: false, message, statusCode});
    }
}

module.exports = ResponseDto;