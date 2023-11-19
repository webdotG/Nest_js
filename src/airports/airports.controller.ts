import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { CreateAirportDto } from './dto/create-airport.dto';
import { UpdateAirportDto } from './dto/update-airport.dto';

@Controller('airports')
export class AirportsController {

  @Get()
  getAll(): string {
    return 'get all airports';
  }

  @Get(':id')
  getId(@Param('id') id: string): string {
    return 'getId ' + id;
  }

  @Post()
  create(@Body() createAirportDto: CreateAirportDto): string {
    return `Title : ${createAirportDto.title} Price : ${createAirportDto.price} `;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'Remove ' + id;
  }

  @Put(':id')
  update(@Body() updateAirportDto: UpdateAirportDto, @Param('id') id: string) {
    return 'Update ' + id;
  }


}
