import { User } from './user.interface';

export interface ActionItem {
  actionText: string,
  user: User,
  deadline: Date,
  taskManagement: string
}