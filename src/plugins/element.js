import Vue from 'vue'
import { 
    Button,
    Col,
    Row,
    Menu,
    MenuItem,
    Submenu,
    Card,
    Table,
    TableColumn,
    Input,
    Pagination,
    Form,
    FormItem,
    Dialog,
    Select,
    Message
} from 'element-ui'

Vue.use(Button)
Vue.use(Col)
Vue.use(Row)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)
Vue.use(Pagination)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Dialog)
Vue.use(Select)
Vue.component(Message)
Vue.prototype.$message = Message
