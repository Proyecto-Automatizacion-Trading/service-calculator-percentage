const ResponseDto = require('./responseDto');

/**
 * @author Daniel Condía Figueredo
 * @description Dto para la validación de los datos de los cálculos
 */
class CalculateDto {
    constructor({investmentType, operationType, timeFrame, currentPrice, strategy}) {
        this.investmentType = investmentType;
        this.operationType = operationType;
        this.timeFrame = timeFrame;
        this.currentPrice = currentPrice;
        this.strategy = strategy
    }

    /**
     * Método encargado de validar los datos de los cálculos obligatorios
     * @param data datos de los cálculos
     * @returns {ResponseDto} nueva instancia de la respuesta
     */
    static validate(data) {
        try {
            const requiredFields = ['investmentType', 'operationType', 'timeFrame', 'currentPrice', 'strategy'];
            for (const field of requiredFields) {
                if (!data[field]) {
                    return ResponseDto.error('El campo ' + field + ' es requerido');
                }
            }

            if (typeof data.currentPrice !== 'number' || isNaN(data.currentPrice) || data.currentPrice <= 0) {
                return ResponseDto.error('El campo currentPrice debe ser un valor numérico mayor que cero');
            }

            return ResponseDto.success('Datos validados correctamente', data);
        } catch (error) {
            console.log('Error al validar los datos de los cálculos:', error);
            return ResponseDto.error('Error al validar los datos de los cálculos');
        }
    }
}

module.exports = CalculateDto;