export function verificaFormatoEmail(EmailString: string): boolean {
    let EmailIsCorrect = false;
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
    if (regex.test(EmailString)) {
        EmailIsCorrect = true;
    }
    return EmailIsCorrect;
}

export function verificaFormatoData(dataString: string): boolean {
    let dateIsCorrect = false;
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (regex.test(dataString)) {
        dateIsCorrect = true;
    }
    return dateIsCorrect;
}

export function stringParaData(dataString: string): Date {
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

export function calculaDateDevolucao(dataString: string): Date {
    const partes = dataString.split('/');
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1;
    const ano = parseInt(partes[2], 10);

    let data = new Date(ano, mes, dia);

    data.setDate(data.getDate() + 14);

    return data;
}