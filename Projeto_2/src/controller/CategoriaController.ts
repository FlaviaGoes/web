import { CategoriaService } from "../service/CategoriaService";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { CategoriaDto } from "../model/dto/CategoriaDto";
import { CategoriaRequestDto } from "../model/dto/CategoriaRequestDto"; //Retirar?
import { Route, Tags, Body, Post, Put, Delete, Get, TsoaResponse, Controller, Path, Res } from "tsoa";
import { Categoria } from "../model/entity/categoria";

@Route("categoria")
@Tags("Categoria")

export class categoriaController extends Controller {
    CategoriaService = new CategoriaService();

    @Post()
    async cadastrarCategoria (
        @Body() dto: CategoriaRequestDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ) : Promise < | void> {
        try {
            const categoria = await this.CategoriaService.cadastrarCategoria(dto);
            return success(201, new BasicResponseDto("Categoria cadastrada com sucesso!", categoria));
        } catch (error:any){
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    };

    @Put()
    async atualizarCategoria(
        @Body() dto: CategoriaDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ) : Promise < | void> {
        try {
            const categoria = await this.CategoriaService.atualizaCategoria(dto);
            return success(200, new BasicResponseDto("Categoria atualizada com sucesso!", categoria));
        } catch (error:any){
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    };

    @Delete()
    async deletarCategoria (
        @Body() dto: CategoriaDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ) : Promise < | void> {
        try {
            const categoria = await this.CategoriaService.deletaCategoria(dto);
            return success(200, new BasicResponseDto("Categoria deletada com sucesso!", categoria));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    };

    @Get("id/{id}")
    async filtrarCategoria (
        @Path() id: number,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success : TsoaResponse<200, BasicResponseDto>
    ) : Promise < | void> {
        try {
            const categoria = await this.CategoriaService.filtraCategoria(id)
            return success(200, new BasicResponseDto("Categoria encontrada com sucesso!", categoria));
        } catch (error:any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    };

    @Get("all")
    async listarCategorias(
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ) : Promise < | void> {
        try {
            const categorias: Categoria[] = await this.CategoriaService.filtrarCategorias();
            return success(200, new BasicResponseDto("Categorias listadas com sucesso!", categorias));
        } catch (error:any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    };
}