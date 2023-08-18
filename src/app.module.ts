import { CacheModule, Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MongooseModule } from '@nestjs/mongoose';
import { DB_URL } from './common/vars';
import { CategoryModule } from './features/category/category.module';

@Module({
  imports: [
    CacheModule.register(),
    EventEmitterModule.forRoot(),
    MongooseModule.forRoot(DB_URL),
    CategoryModule,
  ],
})
export class AppModule {}
