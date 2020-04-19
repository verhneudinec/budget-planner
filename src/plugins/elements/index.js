import Vue from "vue";
import lang from "element-ui/lib/locale/lang/ru-RU";
import locale from "element-ui/lib/locale";
import "element-ui/packages/theme-chalk/lib/index.css";
import {
  Button,
  Card,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Alert,
  Divider,
} from "element-ui";

const elements = [
  Button,
  Card,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Alert,
  Divider,
];

locale.use(lang);

elements.forEach((El) =>
  Vue.use(El, {
    locale,
  })
);
