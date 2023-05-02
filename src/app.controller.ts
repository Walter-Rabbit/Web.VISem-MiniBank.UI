import {
  Controller,
  Get,
  Render,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LoadTimeInterceptor } from './interceptors/loadTimeInterceptor';
import { DomainUrlInterceptor } from './interceptors/domainUrlInterceptor';
import { ApiExcludeController } from '@nestjs/swagger';
import { AuthGuard } from './auth/auth/auth.guard';
import { Session } from './auth/session/session.decorator';
import { SessionContainer } from 'supertokens-node/recipe/session';

@ApiExcludeController()
@Controller()
@UseInterceptors(LoadTimeInterceptor, DomainUrlInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  @UseGuards(new AuthGuard({ sessionRequired: false }))
  index(@Session() session: SessionContainer) {
    let current_page = '';

    if (session == null) {
      current_page = 'login';
    } else {
      current_page = 'main_page';
    }
    return { current_page };
  }

  @Get('e404')
  @Render('index')
  e404() {
    const current_page = 'e404';
    return { current_page };
  }

  @Get('accounts')
  @Render('index')
  accounts() {
    const current_page = 'accounts';
    return { current_page };
  }

  @Get('credits')
  @Render('index')
  credits() {
    const current_page = 'credits';
    return { current_page };
  }

  @Get('deposits')
  @Render('index')
  deposits() {
    const current_page = 'deposits';
    return { current_page };
  }

  @Get('profile')
  @Render('index')
  @UseGuards(new AuthGuard({ sessionRequired: false }))
  profiles(@Session() session: SessionContainer) {
    let current_page = '';

    if (session == null) {
      current_page = 'login';
    } else {
      current_page = 'profile';
    }
    return { current_page };
  }

  @Get('login')
  @Render('index')
  login() {
    const current_page = 'login';
    return { current_page };
  }

  @Get('transactions')
  @Render('index')
  @UseGuards(new AuthGuard({ sessionRequired: false }))
  transactions(@Session() session: SessionContainer) {
    let current_page = '';

    if (session == null) {
      current_page = 'login';
    } else {
      current_page = 'transactions';
    }
    return { current_page };
  }

  @Get('make-transaction')
  @Render('index')
  @UseGuards(new AuthGuard({ sessionRequired: false }))
  makeTransaction(@Session() session: SessionContainer) {
    let current_page = '';

    if (session == null) {
      current_page = 'login';
    } else {
      current_page = 'make-transaction';
    }

    return { current_page };
  }
}
