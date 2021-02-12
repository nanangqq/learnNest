import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll() {
        return {
            movies: 'all movies'
        }
    }

    @Get('search')

    @Get(':id')
    getOne(@Param('id') movieId: string) {
        return `one movie with id: ${movieId}`
    }

    @Post()
    create(@Body() movieData) {
        return movieData
    }

    @Delete(':id')
    remove(@Param('id') movieId: string) {
        return `deleting a movie with id: ${movieId}`
    }

    @Patch(':id')
    patch(@Param('id') movieId: string, @Body() updateData) {
        return {
            updatedMovie: movieId,
            ...updateData
        }
    }

}
