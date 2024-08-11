import { Request, Response, Router } from "express";
import { PessoaService } from "../service/PessoaService";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { PessoaRequestDto } from "../model/dto/PessoaRequestDto";
import { Route, Tags, Body, Post, Res, Put, Delete, Get, Query, TsoaResponse, Controller } from "tsoa";

@Route("pessoa")
@Tags("Pessoa")
export class pessoaController extends Controller {
    
    PessoaService = new PessoaService();

    @Post()
    async cadastrarPessoa (
        @Body() dto: PessoaRequestDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
        ) : Promise < | void> {
            try {
                const pessoa = await this.PessoaService.cadastraPessoa(dto);
                return success (201, new BasicResponseDto("Pessoa cadastrada com sucesso!", pessoa));
            } catch (error: any) {
                return fail(400, new BasicResponseDto(error.message, undefined));
            }
        }
}

