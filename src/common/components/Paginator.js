import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import { useHistory, useLocation } from 'react-router-dom';

import { usePageNumber } from '../hooks';

export default function Paginator({countPages}) {
    const loc = useLocation();
    let history = useHistory();
    let active = usePageNumber();

    const onClick = page => {
        const params = new URLSearchParams(loc.search)
        params.set("page", page)
        history.push(loc.pathname + "?" + params.toString());
    }

    return (
        <div className="col-auto">
            <Pagination current={active} onChange={onClick} total={countPages} pageSize={1} />
        </div>
    )
}