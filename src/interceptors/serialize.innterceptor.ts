import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { plainToClass, ClassConstructor } from 'class-transformer';
import { Observable, map } from 'rxjs';

export function Serialize<T>(dto: ClassConstructor<T>) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor<T> implements NestInterceptor {
  constructor(private dto: ClassConstructor<T>) {}
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<T> | Promise<Observable<T>> {
    // Run somethin before a request id hannndled
    // by request handler

    // console.log('runnin before handler', context);
    return next.handle().pipe(
      map((data: T) => {
        // run something before the response sent out
        // console.log('running before response is sent out', data);
        // return data;
        return plainToClass(this.dto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
