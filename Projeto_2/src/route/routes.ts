/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TsoaRoute, fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { usuarioController } from './../controller/UsuarioController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { pessoaController } from './../controller/PessoaController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { livroController } from './../controller/LivroController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { categoriaController } from './../controller/CategoriaController';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "UsuarioRequestDto": {
        "dataType": "refObject",
        "properties": {
            "idPessoa": {"dataType":"double","required":true},
            "senha": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BasicResponseDto": {
        "dataType": "refObject",
        "properties": {
            "message": {"dataType":"string","required":true},
            "object": {"dataType":"any","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UsuarioDto": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "idPessoa": {"dataType":"double","required":true},
            "senha": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PessoaRequestDto": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PessoaDto": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "name": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LivroRequestDto": {
        "dataType": "refObject",
        "properties": {
            "titulo": {"dataType":"string","required":true},
            "autor": {"dataType":"string","required":true},
            "categoriaId": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LivroDto": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "titulo": {"dataType":"string","required":true},
            "autor": {"dataType":"string","required":true},
            "categoriaId": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CategoriaRequestDto": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CategoriaDto": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "name": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa




export function RegisterRoutes(app: Router) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################


    
        app.post('/usuario',
            ...(fetchMiddlewares<RequestHandler>(usuarioController)),
            ...(fetchMiddlewares<RequestHandler>(usuarioController.prototype.cadastrarUsuario)),

            async function usuarioController_cadastrarUsuario(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    dto: {"in":"body","name":"dto","required":true,"ref":"UsuarioRequestDto"},
                    fail: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    success: {"in":"res","name":"201","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new usuarioController();

              await templateService.apiHandler({
                methodName: 'cadastrarUsuario',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/usuario',
            ...(fetchMiddlewares<RequestHandler>(usuarioController)),
            ...(fetchMiddlewares<RequestHandler>(usuarioController.prototype.atualizarUsuario)),

            async function usuarioController_atualizarUsuario(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    dto: {"in":"body","name":"dto","required":true,"ref":"UsuarioDto"},
                    notFound: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new usuarioController();

              await templateService.apiHandler({
                methodName: 'atualizarUsuario',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/usuario',
            ...(fetchMiddlewares<RequestHandler>(usuarioController)),
            ...(fetchMiddlewares<RequestHandler>(usuarioController.prototype.deletarUsuario)),

            async function usuarioController_deletarUsuario(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    dto: {"in":"body","name":"dto","required":true,"ref":"UsuarioDto"},
                    notFound: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new usuarioController();

              await templateService.apiHandler({
                methodName: 'deletarUsuario',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/usuario/id/:id',
            ...(fetchMiddlewares<RequestHandler>(usuarioController)),
            ...(fetchMiddlewares<RequestHandler>(usuarioController.prototype.filtrarUsuario)),

            async function usuarioController_filtrarUsuario(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
                    notFound: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new usuarioController();

              await templateService.apiHandler({
                methodName: 'filtrarUsuario',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/usuario/all',
            ...(fetchMiddlewares<RequestHandler>(usuarioController)),
            ...(fetchMiddlewares<RequestHandler>(usuarioController.prototype.listarUsuarios)),

            async function usuarioController_listarUsuarios(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    notFound: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new usuarioController();

              await templateService.apiHandler({
                methodName: 'listarUsuarios',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/pessoa',
            ...(fetchMiddlewares<RequestHandler>(pessoaController)),
            ...(fetchMiddlewares<RequestHandler>(pessoaController.prototype.cadastrarPessoa)),

            async function pessoaController_cadastrarPessoa(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    dto: {"in":"body","name":"dto","required":true,"ref":"PessoaRequestDto"},
                    fail: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    success: {"in":"res","name":"201","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new pessoaController();

              await templateService.apiHandler({
                methodName: 'cadastrarPessoa',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/pessoa',
            ...(fetchMiddlewares<RequestHandler>(pessoaController)),
            ...(fetchMiddlewares<RequestHandler>(pessoaController.prototype.atualizarPessoa)),

            async function pessoaController_atualizarPessoa(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    dto: {"in":"body","name":"dto","required":true,"ref":"PessoaDto"},
                    notFound: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new pessoaController();

              await templateService.apiHandler({
                methodName: 'atualizarPessoa',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/pessoa',
            ...(fetchMiddlewares<RequestHandler>(pessoaController)),
            ...(fetchMiddlewares<RequestHandler>(pessoaController.prototype.deletarPessoa)),

            async function pessoaController_deletarPessoa(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    dto: {"in":"body","name":"dto","required":true,"ref":"PessoaDto"},
                    notFound: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new pessoaController();

              await templateService.apiHandler({
                methodName: 'deletarPessoa',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/pessoa/id/:id',
            ...(fetchMiddlewares<RequestHandler>(pessoaController)),
            ...(fetchMiddlewares<RequestHandler>(pessoaController.prototype.filtrarPessoa)),

            async function pessoaController_filtrarPessoa(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
                    notFound: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new pessoaController();

              await templateService.apiHandler({
                methodName: 'filtrarPessoa',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/pessoa/all',
            ...(fetchMiddlewares<RequestHandler>(pessoaController)),
            ...(fetchMiddlewares<RequestHandler>(pessoaController.prototype.listarPessoas)),

            async function pessoaController_listarPessoas(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    notFound: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new pessoaController();

              await templateService.apiHandler({
                methodName: 'listarPessoas',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/livro',
            ...(fetchMiddlewares<RequestHandler>(livroController)),
            ...(fetchMiddlewares<RequestHandler>(livroController.prototype.cadastrarLivro)),

            async function livroController_cadastrarLivro(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    dto: {"in":"body","name":"dto","required":true,"ref":"LivroRequestDto"},
                    fail: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    success: {"in":"res","name":"201","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new livroController();

              await templateService.apiHandler({
                methodName: 'cadastrarLivro',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/livro',
            ...(fetchMiddlewares<RequestHandler>(livroController)),
            ...(fetchMiddlewares<RequestHandler>(livroController.prototype.atualizarLivro)),

            async function livroController_atualizarLivro(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    dto: {"in":"body","name":"dto","required":true,"ref":"LivroDto"},
                    notFound: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new livroController();

              await templateService.apiHandler({
                methodName: 'atualizarLivro',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/livro',
            ...(fetchMiddlewares<RequestHandler>(livroController)),
            ...(fetchMiddlewares<RequestHandler>(livroController.prototype.deletarLivro)),

            async function livroController_deletarLivro(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    dto: {"in":"body","name":"dto","required":true,"ref":"LivroDto"},
                    notFound: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new livroController();

              await templateService.apiHandler({
                methodName: 'deletarLivro',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/livro/id/:id',
            ...(fetchMiddlewares<RequestHandler>(livroController)),
            ...(fetchMiddlewares<RequestHandler>(livroController.prototype.filtrarLivro)),

            async function livroController_filtrarLivro(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
                    notFound: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new livroController();

              await templateService.apiHandler({
                methodName: 'filtrarLivro',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/livro/all',
            ...(fetchMiddlewares<RequestHandler>(livroController)),
            ...(fetchMiddlewares<RequestHandler>(livroController.prototype.listaLivros)),

            async function livroController_listaLivros(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    notFound: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new livroController();

              await templateService.apiHandler({
                methodName: 'listaLivros',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/categoria',
            ...(fetchMiddlewares<RequestHandler>(categoriaController)),
            ...(fetchMiddlewares<RequestHandler>(categoriaController.prototype.cadastrarCategoria)),

            async function categoriaController_cadastrarCategoria(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    dto: {"in":"body","name":"dto","required":true,"ref":"CategoriaRequestDto"},
                    fail: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    success: {"in":"res","name":"201","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new categoriaController();

              await templateService.apiHandler({
                methodName: 'cadastrarCategoria',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/categoria',
            ...(fetchMiddlewares<RequestHandler>(categoriaController)),
            ...(fetchMiddlewares<RequestHandler>(categoriaController.prototype.atualizarCategoria)),

            async function categoriaController_atualizarCategoria(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    dto: {"in":"body","name":"dto","required":true,"ref":"CategoriaDto"},
                    notFound: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new categoriaController();

              await templateService.apiHandler({
                methodName: 'atualizarCategoria',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/categoria',
            ...(fetchMiddlewares<RequestHandler>(categoriaController)),
            ...(fetchMiddlewares<RequestHandler>(categoriaController.prototype.deletarCategoria)),

            async function categoriaController_deletarCategoria(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    dto: {"in":"body","name":"dto","required":true,"ref":"CategoriaDto"},
                    notFound: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new categoriaController();

              await templateService.apiHandler({
                methodName: 'deletarCategoria',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/categoria/id/:id',
            ...(fetchMiddlewares<RequestHandler>(categoriaController)),
            ...(fetchMiddlewares<RequestHandler>(categoriaController.prototype.filtrarCategoria)),

            async function categoriaController_filtrarCategoria(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
                    notFound: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new categoriaController();

              await templateService.apiHandler({
                methodName: 'filtrarCategoria',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/categoria/all',
            ...(fetchMiddlewares<RequestHandler>(categoriaController)),
            ...(fetchMiddlewares<RequestHandler>(categoriaController.prototype.listarCategorias)),

            async function categoriaController_listarCategorias(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    notFound: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new categoriaController();

              await templateService.apiHandler({
                methodName: 'listarCategorias',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
