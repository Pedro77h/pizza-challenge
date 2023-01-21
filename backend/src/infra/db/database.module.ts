import { Module } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { databaseProviders } from './typeorm/typeorm.providers';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[],
  providers: [
    ...databaseProviders
  ],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
