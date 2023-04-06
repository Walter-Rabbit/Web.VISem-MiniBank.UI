import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

export class LoadTimeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const start = Date.now();

    return next.handle().pipe(
      map((content) => {
        return {
          content,
          load_time: (Date.now() - start) / 1000.0,
        };
      }),
    );
  }
}
