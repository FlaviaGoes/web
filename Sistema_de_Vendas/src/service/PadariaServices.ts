import {ModalidadePaes, EstoquePaes, VendaPaes} from "../model/Produtos";
import {GerenciaModalidades, GerenciaEstoque, GerenciaVendas} from "../repository/PadariaRepo";

export class ServicePadoca {
    ModalidadePadoca: GerenciaModalidades = new GerenciaModalidades();
    
    cadastrarModalidade(modalData: any) : ModalidadePaes {
        const {nome, vegano} = modalData;
        const existe = this.ModalidadePadoca.ListaModal.find((ModalidadePaes) => ModalidadePaes.nome === nome && ModalidadePaes.vegano === vegano);
        if(!nome || !vegano){
            throw new Error("Informações incompletas");
        } else {
            if(existe){
                throw new Error("Modalidade já cadastrado");
            }
        }

        const novaModalidade = new ModalidadePaes(nome, vegano);
        this.ModalidadePadoca.insereModal(novaModalidade);
        return novaModalidade;
    }

    mostrarModalidades(): ModalidadePaes[]{
        return this.ModalidadePadoca.filtraModalidades();
    }

    consultarModalidade(id : any): ModalidadePaes | undefined {
        if(!id){
            throw new Error("Necessário informar Modalidade ID");
        } else {
            const idNumber: number = parseInt(id, 10);
            const Modalidade = this.ModalidadePadoca.filtraModalID(idNumber);
            if(Modalidade) {
                return Modalidade
            } else {
                throw new Error("Modalidade não encontrada!");
            }
        }  
    }

    modificarModalidade(modalData: any) : ModalidadePaes | undefined {
        const {id, nome, vegano} = modalData;
        const idNumber: number = parseInt(id, 10);
        const existe = this.ModalidadePadoca.ListaModal.find((ModalidadePaes) => ModalidadePaes.id === idNumber);
        if(!id || !nome || !vegano){
            throw new Error("Informações incompletas");
        } else {
            if(existe){
                return this.ModalidadePadoca.modificaModal(nome, vegano, existe);
            } else {
                throw new Error("Não existe a modalidade que deseja modificar.");
            }
        }
    }

    excluirModalidade(modalData:any){
        const {id, nome, vegano} = modalData;
        const idNumber: number = parseInt(id, 10);
        const existe = this.ModalidadePadoca.ListaModal.find((ModalidadePaes) => ModalidadePaes.nome == nome && ModalidadePaes.id === idNumber && ModalidadePaes.vegano == vegano);
        if(!id || !nome || !vegano){
            throw new Error("Informações Incompletas");
        } else {
            if(existe) {
                return this.ModalidadePadoca.excluirModal(existe);
            } else {
                throw new Error("Modalidade não existente");
            }
        }
    }
}

export class ServiceEstoque {
    novoEstoque : GerenciaEstoque = new GerenciaEstoque();
    ServicePadoca : ServicePadoca;

    constructor(ServicePadoca: ServicePadoca) {
        this.ServicePadoca = ServicePadoca;
    }

    cadastrarEstoque(estoqueData:any) : EstoquePaes {
        const {modalidadeID, quantidade, precoVenda} = estoqueData;
        const idNumber: number = parseInt(modalidadeID, 10);

        const existeModalidade = this.ServicePadoca.ModalidadePadoca.filtraModalID(idNumber);

        if(!modalidadeID || !quantidade || !precoVenda){
            throw new Error("Informações incompletas");
        } else {
            if(existeModalidade){
                const newEstoque = new EstoquePaes(idNumber, quantidade, precoVenda);
                this.novoEstoque.insereEstoque(newEstoque);
                return newEstoque;
            } else {
                    throw new Error("Essa modalidade não existe");
            }
            
        }
    }

    mostrarEstoque(): EstoquePaes[]{
        return this.novoEstoque.TodoEstoque();
    }

    filtrarEstoque(id:any): EstoquePaes{
        if(!id){
            throw new Error("Necessário informar ID do estoque");
        } else {
            const idNumber: number = parseInt(id, 10);
            const Estoque = this.novoEstoque.filtraEstoque(idNumber);
            if(Estoque) {
                return Estoque
            } else {
                throw new Error("Estoque não encontrado!");
            }
        }
    }

    adicionaEstoque(estoqueData: any) : EstoquePaes | undefined {
        const {id, modalidadeID, quantidade, precoVenda} = estoqueData;

        const idNumber: number = parseInt(id, 10);
        const idModal : number = parseInt(modalidadeID, 10);
        
        const existe = this.novoEstoque.listaEstoque.find((EstoquePaes) => EstoquePaes.id === idNumber && EstoquePaes.modalidadeID === idModal);


        if(!id || !modalidadeID || !quantidade || !precoVenda){
            throw new Error("Informações incompletas");
        } else {
            if(existe){
                return this.novoEstoque.AdicionarEstoque(existe, quantidade, precoVenda);
            } else {
                throw new Error("Não existe o estoque que quer modificar.");
            }
        }
    }

    removerEstoque(dataEstoque: any){
        const {id, modalidadeID, quantidade, precoVenda} = dataEstoque;
        
        const idNumber : number = parseInt(id, 10);
        const idModal : number = parseInt(modalidadeID, 10);

        const existe = this.novoEstoque.listaEstoque.find((EstoquePaes) => EstoquePaes.id === idNumber && EstoquePaes.modalidadeID === idModal);

        if(!id || !modalidadeID || !quantidade || !precoVenda){
            throw new Error("Informações incompletas");
        } else {
            if(existe){
                const total = existe.quantidade - quantidade;
                
                if(total < 0){
                    throw new Error(`Remoção rejeitada. Preço atual: ${existe.precoVenda} Quantidade atual: ${existe.quantidade}`)
                } else{
                    return this.novoEstoque.removerEstoque(existe, quantidade, precoVenda);
                }
            } else {
                throw new Error("Estoque/Modalidade não encontrado.");
            }
        }
    }
}

export class ServiceVenda {
    novaVenda : GerenciaVendas = new GerenciaVendas();
    ServicePadoca : ServicePadoca;
    ServiceEstoque : ServiceEstoque;

    constructor(ServicePadoca: ServicePadoca, ServiceEstoque: ServiceEstoque) {
        this.ServicePadoca = ServicePadoca;
        this.ServiceEstoque = ServiceEstoque;
    }

    registroVenda(dataVenda:any) : VendaPaes | undefined {
        const {cpf, itens} = dataVenda;

        if(!cpf || !itens){
            throw new Error("Informações incompletas.");
        } 

        const Venda = new VendaPaes(cpf, 0, itens)

        for(let i=0; i<itens.length; i++){
            const item = itens[i];
            const Estoque = this.ServiceEstoque.filtrarEstoque(item.estoquePaesID)
            const Modalidade = this.ServicePadoca.consultarModalidade(Estoque.modalidadeID)

            if(!Estoque || !Modalidade){
                throw Error("Estoque ou modalidade não encontrados"); 
            }

            const index = Estoque.quantidade - item.quantidade;

            if(index < 0){
                throw new Error(`Estoque esgotado para a quantidade informada! Quantidade Atual: ${Estoque.quantidade} `)
            } else {
                Venda.itensComprados[i].nome = Modalidade?.nome;
                Venda.valorTotal += item.quantidade * Estoque.precoVenda;
                
                Estoque.quantidade -= item.quantidade;
            }
        }

        this.novaVenda.registrarVenda(Venda);
        return this.novaVenda.filtraVenda(Venda.id)
    }

    filtraVenda(id:any): VendaPaes{
        if(!id){
            throw new Error("Necessário informar ID da Venda");
        } else {
            const idNumber: number = parseInt(id, 10);
            const Venda = this.novaVenda.filtraVenda(idNumber)
            if(Venda) {
                return Venda
            } else {
                throw new Error("Venda não encontrada!");
            }
        }
    }
} 