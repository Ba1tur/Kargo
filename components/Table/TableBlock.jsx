import { Table } from 'antd';
import s from './TableBlock.module.scss'


const columns = [
    {
        title: 'Услуги/Город',
        dataIndex: 'address',
        fixed: 'left',
        width: '160px',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Москва',
        dataIndex: 'price',
    },
    {
        title: 'Казань',
        dataIndex: 'price',
    },
    {
        title: 'Самара',
        dataIndex: 'price',
    },
    {
        title: 'Пятигорск',
        dataIndex: 'price2',
    },
];

const data = [
    {
        key: '1',
        price: '35 руб',
        address: 'Пошив',
        price2: '45руб'
    },
    {
        key: '2',
        price: '45 руб',
        address: 'Китай и маркировка',
        price2: '55руб'
    },
    {
        key: '3',
        price: '50 руб',
        address: 'Запчасти',
        price2: '55руб'
    },
    {
        key: '4',
        price: '55 руб',
        address: 'Турция и бренд',
        price2: '60руб'
    },
    {
        key: '5',
        price: '55 руб',
        address: 'Обувь',
        price2: '60руб'
    },
    {
        key: '6',
        price: '1 м куб / 100$',
        address: 'Обьемные',
        price2: '45руб'
    },
];
const TableBlock = () => {
    return (
        <div id='tariffs' className={s.container}>
            <div className={s.table}>
                <h1>Тарифы</h1>
                <Table
                    columns={columns}
                    dataSource={data}
                    scroll={{
                        x: 1300,
                    }}
                />
            </div>
        </div>
    );
};
export default TableBlock;