"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificaFormatoEmail = verificaFormatoEmail;
exports.verificaFormatoData = verificaFormatoData;
exports.stringParaData = stringParaData;
exports.calculaDateDevolucao = calculaDateDevolucao;
function verificaFormatoEmail(EmailString) {
    let EmailIsCorrect = false;
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
    if (regex.test(EmailString)) {
        EmailIsCorrect = true;
    }
    return EmailIsCorrect;
}
function verificaFormatoData(dataString) {
    let dateIsCorrect = false;
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (regex.test(dataString)) {
        dateIsCorrect = true;
    }
    return dateIsCorrect;
}
function stringParaData(dataString) {
    const partes = dataString.split('/');
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1;
    const ano = parseInt(partes[2], 10);
    let data = new Date(ano, mes, dia);
    if (isNaN(data.getTime())) {
        throw new Error("Data inválida");
    }
    return data;
}
function calculaDateDevolucao(dataString) {
    const partes = dataString.split('/');
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1;
    const ano = parseInt(partes[2], 10);
    let data = new Date(ano, mes, dia);
    data.setDate(data.getDate() + 14);
    return data;
}
