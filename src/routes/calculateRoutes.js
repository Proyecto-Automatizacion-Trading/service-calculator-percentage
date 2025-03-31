const express = require('express');
const CalculateDto = require('../utils/dto/calculateDto');
const ResponseDto = require('../utils/dto/responseDto');
const {processPercentageCalculation} = require('../services/calculatorPercentage');

const router = express.Router();

/**
 * Ruta encargada de realizar el cálculo de los porcentajes de las operaciones
 */
router.post('/percentage', (req, res) => {
    try {
        const requestData = req.body;
        const validation = CalculateDto.validate(requestData);
        if (!validation.valid)
            return res.status(400).json(ResponseDto.error(validation.message, validation.statusCode));

        const calculatorDto = new CalculateDto(requestData)
        const result = processPercentageCalculation(calculatorDto);
        console.log('Cálculo realizado con éxito', result);
        return res.status(200).json(ResponseDto.success('Cálculo realizado con éxito', result));
    } catch (error) {
        console.log('Error en la ruta de cálculo de porcentajes:', error);
        return res.status(500).json(ResponseDto.error('Error en la ruta de cálculo de porcentajes'));
    }
});

module.exports = router;