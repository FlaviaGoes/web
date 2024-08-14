"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoaController = void 0;
const PessoaService_1 = require("../service/PessoaService");
const BasicResponseDto_1 = require("../model/dto/BasicResponseDto");
const PessoaRequestDto_1 = require("../model/dto/PessoaRequestDto");
const PessoaDto_1 = require("../model/dto/PessoaDto");
const tsoa_1 = require("tsoa");
let pessoaController = class pessoaController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.PessoaService = new PessoaService_1.PessoaService();
    }
    cadastrarPessoa(dto, fail, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pessoa = yield this.PessoaService.cadastraPessoa(dto);
                return success(201, new BasicResponseDto_1.BasicResponseDto("Pessoa cadastrada com sucesso!", pessoa));
            }
            catch (error) {
                return fail(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    ;
    /**
    @example dto {
            "id": 0,
            "name": "brunno",
            "email": "brunito@gmail.com"
    }
    */
    atualizarPessoa(dto, notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pessoa = yield this.PessoaService.atualizaPessoa(dto);
                return success(200, new BasicResponseDto_1.BasicResponseDto("Pessoa atualizada com sucesso!", pessoa));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    ;
    deletarPessoa(dto, notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pessoa = yield this.PessoaService.deletaPessoa(dto);
                return success(200, new BasicResponseDto_1.BasicResponseDto("Pessoa deletada com sucesso!", pessoa));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    ;
    filtrarPessoa(id, notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pessoa = yield this.PessoaService.filtraPessoa(id);
                return success(200, new BasicResponseDto_1.BasicResponseDto("Pessoa encontrada com sucesso!", pessoa));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    ;
    listarPessoas(notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pessoas = yield this.PessoaService.filtraPessoas();
                return success(200, new BasicResponseDto_1.BasicResponseDto("Pessoas listadas com sucesso!", pessoas));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    ;
};
exports.pessoaController = pessoaController;
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PessoaRequestDto_1.PessoaRequestDto, Function, Function]),
    __metadata("design:returntype", Promise)
], pessoaController.prototype, "cadastrarPessoa", null);
__decorate([
    (0, tsoa_1.Put)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PessoaDto_1.PessoaDto, Function, Function]),
    __metadata("design:returntype", Promise)
], pessoaController.prototype, "atualizarPessoa", null);
__decorate([
    (0, tsoa_1.Delete)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PessoaDto_1.PessoaDto, Function, Function]),
    __metadata("design:returntype", Promise)
], pessoaController.prototype, "deletarPessoa", null);
__decorate([
    (0, tsoa_1.Get)("id/{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function]),
    __metadata("design:returntype", Promise)
], pessoaController.prototype, "filtrarPessoa", null);
__decorate([
    (0, tsoa_1.Get)("all"),
    __param(0, (0, tsoa_1.Res)()),
    __param(1, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", Promise)
], pessoaController.prototype, "listarPessoas", null);
exports.pessoaController = pessoaController = __decorate([
    (0, tsoa_1.Route)("pessoa"),
    (0, tsoa_1.Tags)("Pessoa")
], pessoaController);
