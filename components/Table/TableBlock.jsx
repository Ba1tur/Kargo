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
        dataIndex: 'price',
    },
];
const data = [
    {
        key: '1',
        price: '35 руб',
        address: 'Пошив',
    },
    {
        key: '2',
        price: '45 руб',
        address: 'Китай и маркировка',
    },
    {
        key: '3',
        price: '50 руб',
        address: 'Запчасти',
    },
    {
        key: '4',
        price: '55 руб',
        address: 'Турция и бренд',
    },
    {
        key: '5',
        price: '55 руб',
        address: 'Обувь',
    },
    {
        key: '6',
        price: '1 м куб / 100$',
        address: 'Обьемные',
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