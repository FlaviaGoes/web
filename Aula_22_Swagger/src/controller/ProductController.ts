import { Request, Response } from "express";
import { ProductService } from "../service/ProductService";
import { Controller, Route , Tags, Body, Post, Res , TsoaResponse, Get, Put, Delete, Query} from "tsoa";
import { ProductRequestDto } from "../model/dto/ProductRequestDto";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";

@Route("product")
@Tags("Product")
export class productController extends Controller{

    productService = new ProductService();

    @Post()
    async cadastrarProduto (
        @Body() dto: ProductRequestDto, 
        @Res() fail:TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
        ) : Promise < | void>{
        try {
            const product = await this.productService.cadastrarProduto(dto);
            return success (201, new BasicResponseDto("Produto criado com sucesso!", product));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    };


    @Put()
    async atualizarProduto (
        @Body() dto: ProductRequestDto,
        @Res() fail:TsoaResponse<400, BasicResponseDto>,
        @Res() success:TsoaResponse<201, BasicResponseDto>
        ) : Promise < | void> {
            try {
                const product =  await this.productService.atualizarProduto(dto);
                return success(201, new BasicResponseDto("Produto atualizado com sucesso!", product));
            } catch (error: any){
                return fail(400, new BasicResponseDto(error.message, undefined));
            }
        }

    @Delete()
    async deletarProduto (
        @Body() dto: ProductRequestDto,
        @Res() fail:TsoaResponse<400, BasicResponseDto>,
        @Res() success:TsoaResponse<201, BasicResponseDto>
        ) : Promise < | void>{
            try {
                const product = await this.productService.deletarProduto(dto);
                return success(201, new BasicResponseDto("Produto deletado com sucesso!", product));
            } catch (error: any) {
                return fail(400, new BasicResponseDto(error.message, undefined));
            }
    };

    @Get()
    async filtrarProduct(
        @Query() id: number,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
        ) : Promise < | void> {
            try {
                const product = await this.productService.filtrarProduto(id);
                return success(201, new BasicResponseDto("Produto encontrado com sucesso!", product));
            } catch (error:any) {
                return fail(400, new BasicResponseDto(error.message, undefined));
            }
        }
    
    @Get("all")
    async listarTodosProduct(
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
        ): Promise < | void> {
            try{
                const product = await this.productService.listarTodosProdutos();
                return success(201, new BasicResponseDto("Produtos listados com sucesso!", product));
            } catch (error:any){
                return fail(400, new BasicResponseDto(error.message, undefined));
            }
        }
};
