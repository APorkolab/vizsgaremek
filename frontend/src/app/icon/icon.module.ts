import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatherModule } from 'angular-feather';
import {
  Home,
  Film,
  Video,
  User,
  Cast,
  Calendar,
  Users,
  Youtube,
} from 'angular-feather/icons';

const icons = {
  Home,
  Film,
  Video,
  User,
  Cast,
  Calendar,
  Users,
  Youtube,
};

@NgModule({
  imports: [CommonModule, FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconModule {}
