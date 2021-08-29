import Dashboard from "pages/app/dashboard";
import { UserList, UserCreate, UserDetail, UserEdit } from "pages/app/user";
import { PostList } from "pages/app/post";
import { CommentList } from "pages/app/comment";
import { AlbumList } from "pages/app/album";
import { TodoList } from "pages/app/todo";
import { Login } from "pages/auth";
import { RouteModel } from "types";
import withAuthentication from "hocs/withAuthentication";
import {
  PATH_DASHBOARD,
  PATH_ALBUM,
  PATH_COMMENT,
  PATH_POST,
  PATH_TODOS,
  PATH_USER,
  PATH_USER_CREATE,
  PATH_USER_DETAIL,
  PATH_USER_EDIT,
  PATH_LOGIN
} from "./routes.paths";

export const appRoutes: RouteModel[] = [
  {
    exact: true,
    path: PATH_DASHBOARD,
    component: withAuthentication(Dashboard)
  },
  {
    exact: true,
    path: PATH_ALBUM,
    component: withAuthentication(AlbumList)
  },
  {
    exact: true,
    path: PATH_COMMENT,
    component: withAuthentication(CommentList)
  },
  {
    exact: true,
    path: PATH_POST,
    component: withAuthentication(PostList)
  },
  {
    exact: true,
    path: PATH_USER,
    component: withAuthentication(UserList)
  },
  {
    exact: true,
    path: PATH_USER_CREATE,
    component: withAuthentication(UserCreate)
  },
  {
    exact: true,
    path: PATH_USER_DETAIL,
    component: withAuthentication(UserDetail)
  },
  {
    exact: true,
    path: PATH_USER_EDIT,
    component: withAuthentication(UserEdit)
  },
  {
    exact: true,
    path: PATH_TODOS,
    component: withAuthentication(TodoList)
  }
];

export const authRoutes: RouteModel[] = [
  {
    exact: true,
    path: PATH_LOGIN,
    component: Login
  }
];
