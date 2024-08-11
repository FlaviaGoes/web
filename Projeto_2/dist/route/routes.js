"use strict";
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
exports.RegisterRoutes = RegisterRoutes;
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const PessoaController_1 = require("./../controller/PessoaController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "PessoaRequestDto": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "name": { "dataType": "string", "required": true },
            "email": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BasicResponseDto": {
        "dataType": "refObject",
        "properties": {
            "message": { "dataType": "string", "required": true },
            "object": { "dataType": "any", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new runtime_1.ExpressTemplateService(models, { "noImplicitAdditionalProperties": "throw-on-extras", "bodyCoercion": true });
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.post('/pessoa', ...((0, runtime_1.fetchMiddlewares)(PessoaController_1.pessoaController)), ...((0, runtime_1.fetchMiddlewares)(PessoaController_1.pessoaController.prototype.cadastrarPessoa)), function pessoaController_cadastrarPessoa(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                dto: { "in": "body", "name": "dto", "required": true, "ref": "PessoaRequestDto" },
                fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "201", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new PessoaController_1.pessoaController();
                yield templateService.apiHandler({
                    methodName: 'cadastrarPessoa',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/pessoa', ...((0, runtime_1.fetchMiddlewares)(PessoaController_1.pessoaController)), ...((0, runtime_1.fetchMiddlewares)(PessoaController_1.pessoaController.prototype.atualizarPessoa)), function pessoaController_atualizarPessoa(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                dto: { "in": "body", "name": "dto", "required": true, "ref": "PessoaRequestDto" },
                fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "201", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new PessoaController_1.pessoaController();
                yield templateService.apiHandler({
                    methodName: 'atualizarPessoa',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/pessoa', ...((0, runtime_1.fetchMiddlewares)(PessoaController_1.pessoaController)), ...((0, runtime_1.fetchMiddlewares)(PessoaController_1.pessoaController.prototype.deletarPessoa)), function pessoaController_deletarPessoa(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                dto: { "in": "body", "name": "dto", "required": true, "ref": "PessoaRequestDto" },
                fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "201", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new PessoaController_1.pessoaController();
                yield templateService.apiHandler({
                    methodName: 'deletarPessoa',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/pessoa', ...((0, runtime_1.fetchMiddlewares)(PessoaController_1.pessoaController)), ...((0, runtime_1.fetchMiddlewares)(PessoaController_1.pessoaController.prototype.filtrarPessoa)), function pessoaController_filtrarPessoa(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                id: { "in": "query", "name": "id", "required": true, "dataType": "double" },
                fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "201", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new PessoaController_1.pessoaController();
                yield templateService.apiHandler({
                    methodName: 'filtrarPessoa',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/pessoa/all', ...((0, runtime_1.fetchMiddlewares)(PessoaController_1.pessoaController)), ...((0, runtime_1.fetchMiddlewares)(PessoaController_1.pessoaController.prototype.listarPessoas)), function pessoaController_listarPessoas(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                success: { "in": "res", "name": "201", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new PessoaController_1.pessoaController();
                yield templateService.apiHandler({
                    methodName: 'listarPessoas',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
